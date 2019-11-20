require.config({
    paths: {
        jquery: "https://cdn.bootcss.com/jquery/3.4.1/jquery.min",
        login: "./lib/login",
        md5: './jquery.md5'

    },
    shim: {
        md5: ['jquery']
    }
})

require(['jquery', 'login'], function($, login) {
    login.login()
})