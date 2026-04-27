import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

  '/theherta4/': [
    {
      text: 'TheHerta4 蓝图版',
      items: [
        { text: '介绍', link: '/theherta4/introduction' }
      ]
    },
    {
      text: '前处理',
      items: [
        { text: '前处理介绍', link: '/theherta4/前处理/前处理介绍' }
      ]
    },
    {
      text: '导出处理链',
      items: [
        { text: '导出处理链介绍', link: '/theherta4/导出处理链/导出处理链介绍' },
        { text: '物体信息', link: '/theherta4/导出处理链/Object_Info' },
        { text: '组', link: '/theherta4/导出处理链/Group' },
        { text: '形态键', link: '/theherta4/导出处理链/ShapeKey' },
        { text: '重命名物体', link: '/theherta4/导出处理链/Rename_Object' },
        { text: '物体切换', link: '/theherta4/导出处理链/ObjectSwap' },
        { text: '数据类型', link: '/theherta4/导出处理链/DataType' },
        { text: '顶点组处理', link: '/theherta4/导出处理链/VertexGroupProcess' },
        { text: '顶点组匹配', link: '/theherta4/导出处理链/VertexGroupMatch' },
        { text: '映射表输入', link: '/theherta4/导出处理链/VertexGroupMappingInput' },
        { text: '跨IB', link: '/theherta4/导出处理链/CrossIB' },
        { text: '多文件导出', link: '/theherta4/导出处理链/MultiFile_Export' },
        { text: '蓝图嵌套', link: '/theherta4/导出处理链/Blueprint_Nest' },
        { text: '生成Mod', link: '/theherta4/导出处理链/Result_Output' }
      ]
    },
    {
      text: '后处理',
      items: [
        { text: '后处理介绍', link: '/theherta4/后处理/后处理介绍' },
        { text: '形态键配置', link: '/theherta4/后处理/形态键配置' },
        { text: '材质转资源', link: '/theherta4/后处理/材质转资源' },
        { text: '资源合并', link: '/theherta4/后处理/资源合并' },
        { text: '缓冲区清理', link: '/theherta4/后处理/缓冲区清理' },
        { text: '多文件配置', link: '/theherta4/后处理/多文件配置' },
        { text: '血量检测（仅限ZZZ）', link: '/theherta4/后处理/血量检测' },
        { text: '滑块面板', link: '/theherta4/后处理/滑块面板' },
        { text: '顶点属性定义', link: '/theherta4/后处理/顶点属性定义' }
      ]
    },
    {
      text: '插件联动',
      items: [
        { text: 'Bone Palette 导出', link: '/theherta4/插件联动/插件联动介绍' }
      ]
    },
    {
      text: '工具集',
      items: [
        { text: '工具集介绍', link: '/theherta4/工具集/工具集介绍' },
        {
          text: '顶点组处理工具',
          items: [
            { text: '功能总览', link: '/theherta4/工具集/顶点组处理工具/顶点组处理工具介绍' },
            { text: '用模型名称作为前缀重命名顶点组', link: '/theherta4/工具集/顶点组处理工具/用模型名称作为前缀重命名顶点组' },
            { text: '根据顶点组生成基础骨骼', link: '/theherta4/工具集/顶点组处理工具/根据顶点组生成基础骨骼' },
            { text: '创建组和UV', link: '/theherta4/工具集/顶点组处理工具/创建组和UV' },
            { text: '批量重命名顶点组', link: '/theherta4/工具集/顶点组处理工具/批量重命名顶点组' },
            { text: '批量删除顶点组', link: '/theherta4/工具集/顶点组处理工具/批量删除顶点组' },
            { text: '清理顶点组', link: '/theherta4/工具集/顶点组处理工具/清理顶点组' },
            { text: '按数字前缀合并顶点组', link: '/theherta4/工具集/顶点组处理工具/按数字前缀合并顶点组' },
            { text: '仅保留数字顶点组', link: '/theherta4/工具集/顶点组处理工具/仅保留数字顶点组' },
            { text: '填充顶点组数字空隙', link: '/theherta4/工具集/顶点组处理工具/填充顶点组数字空隙' },
            { text: '权重备份与恢复', link: '/theherta4/工具集/顶点组处理工具/权重备份与恢复' },
            { text: '权重调整与规格化', link: '/theherta4/工具集/顶点组处理工具/权重调整与规格化' }
          ]
        },
        {
          text: '骨骼与模型处理工具',
          items: [
            { text: '功能总览', link: '/theherta4/工具集/骨骼与模型处理工具/骨骼与模型处理工具介绍' },
            { text: '骨骼控制', link: '/theherta4/工具集/骨骼与模型处理工具/骨骼控制' },
            { text: '权重操作', link: '/theherta4/工具集/骨骼与模型处理工具/权重操作' },
            { text: '模型控制', link: '/theherta4/工具集/骨骼与模型处理工具/模型控制' },
            { text: '网格编辑', link: '/theherta4/工具集/骨骼与模型处理工具/网格编辑' },
            { text: 'UV数据工具', link: '/theherta4/工具集/骨骼与模型处理工具/UV数据工具' },
            { text: '场景清理', link: '/theherta4/工具集/骨骼与模型处理工具/场景清理' },
            { text: '集合关联工具', link: '/theherta4/工具集/骨骼与模型处理工具/集合关联工具' },
            { text: '修改器工具', link: '/theherta4/工具集/骨骼与模型处理工具/修改器工具' }
          ]
        },
        {
          text: '贴图与材质工具',
          items: [
            { text: '功能总览', link: '/theherta4/工具集/贴图与材质工具/贴图与材质工具介绍' },
            { text: 'DDS贴图转换', link: '/theherta4/工具集/贴图与材质工具/DDS贴图转换' },
            { text: '法线贴图生成', link: '/theherta4/工具集/贴图与材质工具/法线贴图生成' },
            { text: '通用节点烘焙', link: '/theherta4/工具集/贴图与材质工具/通用节点烘焙' },
            { text: '透明通道提取', link: '/theherta4/工具集/贴图与材质工具/透明通道提取' },
            { text: '材质批量操作', link: '/theherta4/工具集/贴图与材质工具/材质批量操作' },
            { text: '光照模板生成', link: '/theherta4/工具集/贴图与材质工具/光照模板生成' },
            { text: '材质预览与管理', link: '/theherta4/工具集/贴图与材质工具/材质预览与管理' }
          ]
        },
        {
          text: '动画处理工具',
          items: [
            { text: '功能总览', link: '/theherta4/工具集/动画处理工具/动画处理工具介绍' },
            { text: '形态键统一控制器', link: '/theherta4/工具集/动画处理工具/形态键统一控制器' },
            { text: '形态键操作', link: '/theherta4/工具集/动画处理工具/形态键操作' },
            { text: '形状差异与帧拆分', link: '/theherta4/工具集/动画处理工具/形状差异与帧拆分' },
            { text: '形态键动画序列导出', link: '/theherta4/工具集/动画处理工具/形态键动画序列导出' },
            { text: '烘焙与自动导入', link: '/theherta4/工具集/动画处理工具/烘焙与自动导入' },
            { text: '动画帧拆分', link: '/theherta4/工具集/动画处理工具/动画帧拆分' },
            { text: '自动化形态键导出', link: '/theherta4/工具集/动画处理工具/自动化形态键导出' },
            { text: '动画导出与缓冲合并', link: '/theherta4/工具集/动画处理工具/动画导出与缓冲合并' }
          ]
        }
      ]
    }
  ],

  '/': [
    {
      text: '前方的区域，以后再来探索吧'
    }
  ],


}
