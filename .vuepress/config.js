module.exports = {
    title: 'AC-Voyage',
    description: 'Make it accepted.',

    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Library', link: '/library' },
            { text: 'Templates', link: '/templates' },
        ],
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