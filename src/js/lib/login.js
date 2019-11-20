define(['jquery', 'md5'], function($) {
    return {
        login: function() {
            $('.sub').on('click', function() {
                let username = $('.phonenum').val();
                let userpass = $('.passnum').val();
                // console.log(username, userpass);
                $.ajax({
                    type: "post",
                    url: "http://127.0.0.1:8080/1910/OnePlus/lib/login.php",
                    dataType: "json",
                    data: {
                        username: $('.phonenum').val(),
                        userpass: $.md5($('.passnum').val())
                    },
                    success: function(res) {
                        alert(res.msg)
                        location.href = 'http://127.0.0.1:8080/1910/OnePlus/src/html/index.html'
                    }
                });
            })
        }
    }
})