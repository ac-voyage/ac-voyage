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
            '/library/': [
                {
                    title: 'Data Structure',
                    children: [
                        [ '/library/data-structure/persistent-segment-tree.md', '可持久化线段树' ],
                    ],
                },
                {
                    title: 'Math',
                    children: [
                        [ '/library/math/mobius', 'Möbius' ],
                    ],
                },
            ],
        },
        lastUpdated: 'Last Updated',
        repo: 'ac-voyage/ac-voyage',
        editLinks: true,
    },

    head: [
        ['link', { rel: 'stylesheet', href: 'https://cdn.bootcss.com/KaTeX/0.6.0/katex.min.css' }],
    ],
    markdown: {
        lineNumbers: true,
        config: md => {
            md.use(require('markdown-it-katex'))
              .use(require('markdown-it-task-lists'));
        },
    },
};
