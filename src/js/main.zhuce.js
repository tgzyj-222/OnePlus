require.config({
    paths: {
        // jquery: "./jquery.min", //本地文件地址
        jquery: "https://cdn.bootcss.com/jquery/3.4.1/jquery.min", //CDN地址
        zhuce: "./lib/zhuce",
        md5: "./jquery.md5"
    },
    shim: {
        md5: ['jquery']
    }
});

require(['jquery', 'zhuce'], function($, zhuce) {
    zhuce.reg();
})