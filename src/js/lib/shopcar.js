let baseUrl = "http://127.0.0.1:8080/1910/OnePlus";
define(['jquery', 'cookie'], function($, cookie) {
    return {
        xuanran: function(callback) {
            //获取cookie值
            let shop = cookie.get('shop');
            //判断是否有cookie数据
            // console.log(shop)
            if (shop) {
                shop = JSON.parse(shop);
                // console.log(shopping);
                let idList = shop.map(elm => elm.id).join();
                // alert(1);
                $.ajax({
                    type: "get",
                    url: `http://127.0.0.1:8080/1910/OnePlus/lib/shopcar.php`,
                    data: {
                        idList: idList
                    },
                    dataType: "json",
                    success: function(res) {
                        let temp = '';
                        res.forEach(elm => {
                            let pic = JSON.parse(elm.pic)[0].src;
                            // console.log(pic)
                            //查询id对应的数量
                            let arr = shop.filter((val, i) => {
                                    return val.id == elm.id
                                })
                                // console.log(arr)
                            temp += `
                                
                                <div class="car-item">
                                    <div class="p-pic">
                                        <img src="${baseUrl}/${pic}" alt="">
                                    </div>
                                    <div class="item-main">
                                        <div class="p-title">${elm.title}</div>
                                        <p class="p-price">￥${elm.price}</p>
                                        <input type="number" class="num" value="1">
                                        <p class="b-price"><span>￥${elm.price}</span></p>
                                        <button class="tu"></button>
                                    </div>
                                </div>
                            
                            `;
                        });
                        $('.car-items').append(temp);

                        callback && callback()
                    }
                });
            }
        },
        change: function() {
            console.log($('.num'))
                // console.log(this)
                // console.log($(this).parent().prev().children("span").text());
            let newpri = $(this).parent().prev().children("span").text() * this.value;
            // console.log(newpri);
            $(this).parent().next().children("span").text(newpri.toFixed(2))
                // console.log($(this).parent().next().children("span").text());
            let naddpri = 0
            $('.num').parent().next().children("span").each((i, elm) => { naddpri += ($(elm).text() * 1) })
            console.log(naddpri.toFixed(2));
            $('.tu').on('click', function() {
                $('.b-price').text(naddpri.toFixed(2))
            })
        }
    }
})