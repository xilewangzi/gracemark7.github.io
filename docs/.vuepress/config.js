module.exports = {
    title:"Grace's Blog",
    description: '记录、成长',
    theme: 'reco',
    head: [
        // ['link', { rel: 'icon',href: 'theme/favicon.ico'}],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    themeConfig: {
      nav: [
            {text: '首页',link: '/',icon: 'reco-home'},
            { text: '笔记', link: '/markTime/', icon: 'reco-date' },
            { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
            { text: '分类', link: '/category/', icon: 'reco-date' },
            { text: 'Tag', link: '/tag/', icon: 'reco-date' },
            {text: 'Links',icon: 'reco-message', items: [
                {
                    text: '山月行',
                    link: 'https://shanyue.tech/',
                    icon: 'reco-github'
                },
                {
                  text: '刘向洋',
                  link: 'https://liuxiangyang.space/',
                  icon: 'reco-github'
              }
            ]},
            { text: '关于我', link: '/myNews/', icon: 'reco-date' },
            { text: 'Github', link: 'https://github.com/xilewangzi', icon: 'reco-date' },
      ],
       // 博客配置
      blogConfig: {
        markTime: {
          location: 5,     // 在导航栏菜单中所占的位置，默认2
          text: '笔记' // 默认文案 “分类”
        },
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: '分类' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: 'Tag'      // 默认文案 “标签”
        },
        timeLine: {
            location: 4,     // 在导航栏菜单中所占的位置，默认2
            text: 'TimeLine' // 默认文案 “分类”
          },
          myNews: {
            location: 1,     // 在导航栏菜单中所占的位置，默认2
            text: '关于我' // 默认文案 “分类”
          },

        author: 'Grace'
      },
      logo: '/images/chizhiyiheng.png',
      search: true,
      searchMaxSuggestions: 10,
    // 自动形成侧边导航
     sidebar: 'auto',
    // 最后更新时间
     lastUpdated: 'Last Updated',
    // 作者
     author: 'Zhangruibo',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2017',
    },
    markdown: {
        lineNumbers: true
      },
    //   plugins: ['@vuepress/medium-zoom', 'flowchart']
  }  