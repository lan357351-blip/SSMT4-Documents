# 跨IB

Cross IB（跨索引缓冲区）节点用于在导出配置中添加跨 IB 渲染的支持。

## 节点信息

- **节点类型**：`SSMTNode_CrossIB`
- **图标**：左右箭头
- **最小宽度**：350

## 功能说明

跨 IB 节点允许将一个 IB（索引缓冲区）的渲染调用重定向到另一个 IB，实现跨 IB 的渲染效果。这在游戏 Mod 中常用于将一个模型的渲染替换为另一个模型的渲染。

## 节点参数

| 参数 | 说明 |
|------|------|
| Cross IB Method | 跨 IB 方式：`终末地跨 IB`（EFMI）或 `VB 复制`（ZZMI） |
| Match Mode | 识别模式：`通过 IndexCount 识别` 或 `通过 IB Hash 识别` |
| Cross IB List | 跨 IB 映射列表 |

### VS 槽位选项（仅 EFMI）

| 参数 | 说明 |
|------|------|
| 200 | 源块 VS 槽位 200 |
| 201 | 源块 VS 槽位 201 |
| 204 | 源块 VS 槽位 204 |
| 202 | 目标块 VS 槽位 202 |
| 203 | 目标块 VS 槽位 203 |

## 映射列表格式

### EFMI 模式（通过 IndexCount 识别）

每条映射包含：
- **源 IndexCount**：源 IB 的索引数量
- **目标 IndexCount**：目标 IB 的索引数量

### ZZMI 模式（通过 IB Hash 识别）

每条映射包含：
- **源 IB**：源 IB 哈希值，格式为 `IBHash-FirstIndex`
- **目标 IB**：目标 IB 哈希值，格式为 `IBHash-FirstIndex`

## Rename 节点的衍生映射

当蓝图中同时存在 Cross IB 节点和 Rename 节点时，系统会自动检测 Rename 操作导致的 IndexCount 或 IB Hash 变化，并将这些变化作为衍生映射追加到 Cross IB 节点的映射列表中。

## 在处理链中的角色

Cross IB 节点在处理链中记录跨 IB 映射信息，导出时生成对应的条件配置。系统会：
1. 收集所有跨 IB 映射
2. 检测经过跨 IB 节点的物体
3. 为匹配的物体标记跨 IB 标识
4. 生成 VB 条件映射和源-目标映射关系
