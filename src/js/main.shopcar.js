require.config({
    paths: {
        // jquery: "./jquery.min",
        jquery: "https://cdn.bootcss.com/jquery/3.4.1/jquery.min",
        cookie: "./lib/cookie",
        shopcar: "./lib/shopcar"
    },
    shim: {}
})

require(['jquery', 'shopcar'], function($, shopcar) {
    shopcar.xuanran(function() {
        shopcar.change();
        shopcar.del();
    });
})