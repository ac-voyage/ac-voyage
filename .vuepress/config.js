module.exports = {
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