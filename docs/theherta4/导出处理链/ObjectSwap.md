# 物体切换

Object Swap（物体切换）节点用于在导出的 INI 配置中添加条件判定，实现游戏内的物体动态切换。

## 节点信息

- **节点类型**：`SSMTNode_ObjectSwap`
- **图标**：特效

## 功能说明

Object Swap 节点允许用户通过快捷键在游戏中切换不同的物体变体。每个输入口对应一个切换选项，在导出的 INI 中生成对应的 `[KeySwap]` 配置和条件判定逻辑。

## 节点参数

| 参数 | 说明 |
|------|------|
| Comment | 备注信息，会写入 KeySwap 段落中作为注释 |
| Custom Var Name | 自定义变量名（不含 `$` 前缀），留空则自动分配 `$swapkeyN` |
| Hotkey | 快捷键组合，格式为 `Modifier KeyName`，例如 `No_Modifiers Numpad3` |
| Swap Type | 切换类型：`cycle`（循环切换）、`toggle`（开关切换）、`hold`（按住激活） |
| Condition Operator | 条件运算符：`&&`（AND，所有条件都满足）或 `||`（OR，至少一个条件满足） |
| Input Slot Count | 输入口数量（选项数量），每个输入口对应一个切换选项 |

## 输入输出

- **输入口**：动态数量的输入口，命名为 `选项_0`、`选项_1`、`选项_2`...
- **输出口**：单个输出口

输入口编号从 0 开始，与 KeySwap 的选项值对应：
- 选项_0 → `$swapkey == 0`
- 选项_1 → `$swapkey == 1`
- 以此类推

## 生成的 INI 配置

Object Swap 节点会在导出的 INI 中生成以下配置段落：

### KeySwap 段落

```ini
[KeySwap_0]
; 备注信息
condition = $active0 == 1
key = No_Modifiers Numpad3
type = cycle
$swapkey0 = 0,1,
```

### Constants 段落

```ini
global persist $swapkey0 = 0
```

### TextureOverride 段落中的激活参数

```ini
[TextureOverride_4c11c155_288_7068]
hash = 4c11c155
$active0 = 1
```

### DrawIndexed 条件示例

```ini
if $swapkey0 == 1
  drawindexed = 7068,0,0
endif
```

## 多个 Object Swap 节点的嵌套

当蓝图中存在多个 Object Swap 节点时，条件可以嵌套组合：

```ini
if $swapkey0 == 1 && $swapkey1 == 1
  drawindexed = 7068,0,0
endif
```

条件运算符（`&&` 或 `||`）可以在每个 Object Swap 节点中独立设置。

## 在处理链中的角色

Object Swap 节点在链路分叉时记录选项索引（`swap_node_option_values`），在物体切换集成阶段为每个节点分配唯一的 swapkey 索引，并生成对应的 M_Key 条件参数添加到处理链中。
