# 数据类型

DataType 节点用于为物体指定自定义的数据类型配置，例如 JSON 格式的额外数据。

## 节点信息

- **节点类型**：`SSMTNode_DataType`

## 功能说明

DataType 节点允许用户为物体关联额外的数据类型信息，这些信息可以在导出时被读取和使用。节点包含以下参数：

| 参数 | 说明 |
|------|------|
| Draw IB Match | 匹配的 DrawIB 哈希值 |
| Tmp JSON Path | 临时 JSON 文件的路径 |
| Loaded Data | 已加载的数据内容 |

## 在处理链中的角色

DataType 节点在处理链中记录数据类型参数，导出时可以通过 `BlueprintExportHelper.get_datatype_node_info()` 获取所有连接到输出的 DataType 节点信息。
