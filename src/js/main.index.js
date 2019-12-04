require.config({
    paths: {
        jquery: "./jquery.min",
        index: "./lib/index",
        lazyload: "./jquery.lazyload.min"
    },
    shim: {
        lazyload: ['jquery']
    }
});

require(['jquery', 'index', 'lazyload'], function($, index) {
    index.render();
});