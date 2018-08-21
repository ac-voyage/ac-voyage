module.exports = {
    title: 'AC-Voyage',
    description: 'Make it accepted.',

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Library', link: '/library/' },
            { text: 'Templates', link: '/templates/' },
            { text: 'Editorials', link: '/editorials/' },
        ],
        sidebar: {
            '/library/graph/': [
                [ '/library/graph/', 'Graph' ],
                [ '/library/graph/tree/prufer', 'Prüfer 序列' ],
                [ '/library/graph/kirchhoffs-theorem', '基尔霍夫矩阵树' ],
                [ '/library/graph/shortest-path', '最短路' ],
                [ '/library/graph/chord', '弦图' ],
            ],
            '/library/': [
                {
                    title: 'Math',
                    children: [
                        [ '/library/math/combinatorics/inclusion-exclusion', '容斥原理' ],
                        [ '/library/math/combinatorics/burnside-polya', 'Pólya 计数定理' ],
                        [ '/library/math/number-theory/mobius', 'Möbius' ],
                        [ '/library/math/fwt', '快速沃尔什变换' ],
                    ],
                },
                {
                    title: 'Dynamic Programming',
                    children: [
                        [ '/library/dynamic-programming/bitmasking', '状压 dp' ],
                    ],
                },
                {
                    title: 'Data Structure',
                    children: [
                        [ '/library/data-structure/persistent-segment-tree', '可持久化线段树' ],
                    ],
                },
                {
                    title: 'Graph',
                    children: [
                        [ '/library/graph/tree/', '树' ],
                        [ '/library/graph/shortest-path', '最短路' ],
                        [ '/library/graph/kirchhoffs-theorem', '基尔霍夫矩阵树定理' ],
                        [ '/library/graph/chord', '弦图' ],
                    ],
                },
            ],
            '/editorials/bzoj/vol-01/': [
                [ '/editorials/bzoj/vol-01/1001', '1001: [BeiJing2006]狼抓兔子' ],
                [ '/editorials/bzoj/vol-01/1002', '1002: [FJOI2007]轮状病毒' ],
                [ '/editorials/bzoj/vol-01/1003', '1003: [ZJOI2006]物流运输' ],
                [ '/editorials/bzoj/vol-01/1004', '1004: [HNOI2008]Cards' ],
                [ '/editorials/bzoj/vol-01/1005', '1005: [HNOI2008]明明的烦恼' ],
                [ '/editorials/bzoj/vol-01/1006', '1006: [HNOI2008]神奇的国度' ],
                [ '/editorials/bzoj/vol-01/1007', '1007: [HNOI2008]水平可见直线' ],
                [ '/editorials/bzoj/vol-01/1008', '1008: [HNOI2008]越狱' ],
                [ '/editorials/bzoj/vol-01/1009', '1009: [HNOI2008]GT考试' ],
                [ '/editorials/bzoj/vol-01/1010', '1010: [HNOI2008]玩具装箱toy' ],
            ],
            '/editorials/': [
                {
                    title: 'bzoj',
                    children: [
                        [ '/editorials/bzoj/vol-01/', 'Volume 01' ],
                    ],
                },
            ],
        },
        lastUpdated: 'Last Updated',
        repo: 'ac-voyage/ac-voyage',
        editLinks: true,
    },

    head: [
        ['link', { rel: 'stylesheet', href: 'https://cdn.bootcss.com/KaTeX/0.9.0/katex.min.css' }],
    ],
    markdown: {
        lineNumbers: true,
        config: md => {
            md.use(require('@iktakahiro/markdown-it-katex'))
              .use(require('markdown-it-task-lists'));
        },
    },
};
