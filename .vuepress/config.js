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
            '/library/graph/tree/': [
                [ '/library/graph/tree/prufer', 'Prüfer 序列' ],
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
                    ],
                },
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
