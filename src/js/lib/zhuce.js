define(['jquery', 'md5'], function($) {
    return {
        reg: function() {
            let uname = /^1[3-9]\d{9}$/;
            // let uname = /\w{6,16}$/;
            let upass = /^[A-z]\w{7,15}$/
                // let num = /^1[3-9]\d{9}$/;
                //验证用户名
            $('.phonenum').on('keyup', function() {
                if (uname.test($('.phonenum').val())) {
                    $('.unphone').html('通过验证').addClass('green').removeClass('red')
                } else {
                    $('.unphone').html('未通过验证').addClass('red').removeClass('green')
                }
            });
            //验证密码
            $('.passnum').on('keyup', function() {
                if (upass.test($('.password').val())) {
                    $('.unpass').html('通过验证').addClass('green').removeClass('red')
                } else {
                    $('.unpass').html('未通过验证').addClass('red').removeClass('green')
                }
            });
            //确认密码
            // $('.verify').on('keyup', function() {
            //         console.log(1)
            //         if ($('.verify').val() == $('.password').val()) {
            //             $('.uver').html('密码一致，可以注册').addClass('green').removeClass('red')
            //         } else {
            //             $('.uver').html('密码不一致，请重新输入').addClass('red').removeClass('green')
            //         }
            //     })
            //验证手机号
            // $('.phone').on('keyup', function() {
            //         if (num.test($('.phone').val())) {
            //             $('.uphone').html('通过验证').addClass('green').removeClass('red')
            //         } else {
            //             $('.uphone').html('未通过验证').addClass('red').removeClass('green')
            //         }
            //     })
            //提交数据
            $('.sub').on('click', function() {
                console.log($('.passnum').val())
                    // alert(1)
                $.ajax({
                    type: "post",
                    url: "http://127.0.0.1:8080/1910/OnePlus/lib/zhuce.php",
                    data: {
                        username: $('.phonenum').val(),
                        password: $.md5($('.passnum').val()),
                        // phone: $('.phone').val()
                    },
                    success: function(res) {
                        //返回结果
                        if (res) {
                            alert('注册成功');
                            location.href = 'http://127.0.0.1:8080/1910/OnePlus/src/html/login.html'
                        }
                    }
                });
                // location.reload(); //刷新页面
                console.log($.md5($('.passnum').val()))
            })
        }
    }
})