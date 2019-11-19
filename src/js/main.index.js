require.config({
    paths: {
        jquery: "./jquery.min",
        index: "./lib/index"
    },
    shim: {}
});

require(['jquery', 'index'], function($, index) {
    index.render();
});