module.exports = {
    head: {
        titleTemplate: '%s - D.Recreation',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1'},
            { hid: 'description', name: 'description', content: 'D.Recreation 홈페이지 입니다.'},
        ]
    },
    css: [
        'assets/main.css'
    ],
    build: {
        vendor: [
            '@fortawesome/fontawesome',
            '@fortawesome/fontawesome-free-solid',
            '@fortawesome/fontawesome-free-brands'
        ]
    }
}