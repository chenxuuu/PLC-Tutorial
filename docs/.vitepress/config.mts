import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PLC编程教程",
  description: "一套系统的PLC可编程逻辑控制器入门到进阶教程",
  lang: 'zh-CN',
  base: '/',
  
  head: [
    ['meta', { name: 'author', content: 'AI Generated - Claude Opus 4.5' }],
    ['meta', { name: 'keywords', content: 'PLC,可编程逻辑控制器,自动化,西门子,三菱,教程' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/chapter1/1.1' },
      { text: 'GitHub', link: 'https://github.com/chenxuuu/PLC-Tutorial' }
    ],

    sidebar: [
      {
        text: '第一章：PLC基础概述',
        collapsed: false,
        items: [
          { text: '1.1 什么是PLC', link: '/chapter1/1.1' },
          { text: '1.2 PLC的发展历史', link: '/chapter1/1.2' },
          { text: '1.3 PLC的工作原理', link: '/chapter1/1.3' },
          { text: '1.4 PLC的硬件结构', link: '/chapter1/1.4' },
          { text: '1.5 主流PLC品牌介绍', link: '/chapter1/1.5' },
        ]
      },
      {
        text: '第二章：PLC编程基础',
        collapsed: false,
        items: [
          { text: '2.1 PLC编程语言概述', link: '/chapter2/2.1' },
          { text: '2.2 梯形图编程入门', link: '/chapter2/2.2' },
          { text: '2.3 基本逻辑指令', link: '/chapter2/2.3' },
          { text: '2.4 数据类型与寻址方式', link: '/chapter2/2.4' },
          { text: '2.5 编程软件的使用', link: '/chapter2/2.5' },
        ]
      },
      {
        text: '第三章：基本指令应用',
        collapsed: false,
        items: [
          { text: '3.1 位逻辑指令', link: '/chapter3/3.1' },
          { text: '3.2 定时器指令', link: '/chapter3/3.2' },
          { text: '3.3 计数器指令', link: '/chapter3/3.3' },
          { text: '3.4 数据传送指令', link: '/chapter3/3.4' },
          { text: '3.5 比较指令', link: '/chapter3/3.5' },
        ]
      },
      {
        text: '第四章：高级指令应用',
        collapsed: false,
        items: [
          { text: '4.1 数学运算指令', link: '/chapter4/4.1' },
          { text: '4.2 移位与循环指令', link: '/chapter4/4.2' },
          { text: '4.3 程序控制指令', link: '/chapter4/4.3' },
          { text: '4.4 子程序与功能块', link: '/chapter4/4.4' },
          { text: '4.5 中断程序设计', link: '/chapter4/4.5' },
        ]
      },
      {
        text: '第五章：模拟量处理',
        collapsed: false,
        items: [
          { text: '5.1 模拟量基础知识', link: '/chapter5/5.1' },
          { text: '5.2 模拟量输入处理', link: '/chapter5/5.2' },
          { text: '5.3 模拟量输出控制', link: '/chapter5/5.3' },
          { text: '5.4 PID控制原理与应用', link: '/chapter5/5.4' },
        ]
      },
      {
        text: '第六章：通信技术',
        collapsed: false,
        items: [
          { text: '6.1 工业通信基础', link: '/chapter6/6.1' },
          { text: '6.2 串口通信RS232/RS485', link: '/chapter6/6.2' },
          { text: '6.3 以太网通信', link: '/chapter6/6.3' },
          { text: '6.4 现场总线技术', link: '/chapter6/6.4' },
          { text: '6.5 PLC与HMI通信', link: '/chapter6/6.5' },
        ]
      },
      {
        text: '第七章：实战项目案例',
        collapsed: true,
        items: [
          { text: '7.1 交通灯控制系统', link: '/chapter7/7.1' },
          { text: '7.2 自动装配线控制', link: '/chapter7/7.2' },
          { text: '7.3 电机正反转控制', link: '/chapter7/7.3' },
          { text: '7.4 温度控制系统', link: '/chapter7/7.4' },
          { text: '7.5 物料分拣系统', link: '/chapter7/7.5' },
        ]
      },
      {
        text: '第八章：故障诊断与维护',
        collapsed: true,
        items: [
          { text: '8.1 常见故障类型', link: '/chapter8/8.1' },
          { text: '8.2 故障诊断方法', link: '/chapter8/8.2' },
          { text: '8.3 程序调试技巧', link: '/chapter8/8.3' },
          { text: '8.4 系统维护与保养', link: '/chapter8/8.4' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenxuuu/PLC-Tutorial' }
    ],

    footer: {
      message: '本教程由 AI (Claude Opus 4.5) 生成，仅供学习参考',
      copyright: 'Copyright © 2025 | MIT License'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
