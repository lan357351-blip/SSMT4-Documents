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
    }
  ],

  '/': [
    {
      text: '前方的区域，以后再来探索吧'
    }
  ],


}
