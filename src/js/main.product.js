require.config({
    paths: {
        jquery: "./jquery.min",
        product: "./lib/product",
        cookie: "./lib/cookie"
    },
    shim: {}
});


require(['jquery', 'product'], function($, product) {
    product.render(function(id, price) { // 渲染页面
        $('.p-show').on('click', function() {
            product.addItem(id, price);
        });
    });
});