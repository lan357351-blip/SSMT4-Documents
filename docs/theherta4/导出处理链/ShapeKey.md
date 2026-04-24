# 形态键

ShapeKey 节点用于为物体添加形态键（Blend Shape / Morph Target）参数配置。

## 节点信息

- **节点类型**：`SSMTNode_ShapeKey`
- **图标**：形态键

## 功能说明

ShapeKey 节点将 Blender 中的形态键信息转换为导出配置中的参数。每个 ShapeKey 节点对应一个形态键，在导出的 INI 配置中生成对应的 `$shapekey` 变量。

## 节点参数

| 参数 | 说明 |
|------|------|
| ShapeKey Name | 形态键名称，对应 Blender 物体中的形态键 |
| Key | 形态键的初始化值（VK 字符串） |
| Comment | 备注信息，会写入 INI 配置中作为注释 |

## 生成的配置

ShapeKey 节点会在导出的 INI 配置中生成以下内容：

```ini
; 在 [Constants] 中
global $shapekey_{名称} = 0
```

## 在处理链中的角色

ShapeKey 节点在处理链中记录形态键参数（`shapekey_params`）。这些参数会被传递到最终的 DrawCall 模型中，用于生成形态键的条件控制逻辑。

## ShapeKey Output 节点

ShapeKey Output 节点（`SSMTNode_ShapeKey_Output`）是形态键的输出汇总节点，用于将多个 ShapeKey 节点连接在一起。它不执行实际操作，仅作为形态键链路的终点。
