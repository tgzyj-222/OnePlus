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
                                
                                <div class="car-item" >
                                    <div class="p-pic">
                                        <img src="${baseUrl}/${pic}" alt="">
                                    </div>
                                    <div class="item-main" id="${elm.id}">
                                        <div class="p-title">${elm.title}</div>
                                        <p class="p-price">￥<span>${elm.price}</span></p>
                                        <input type="number" class="num" value="1">
                                        <p class="b-price">￥<span class="addprice">${elm.price}</span></p>
                                        <button class="tu">×</button>
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
            $('.num').on('change', function() {
                let addprice = ($(this).val()) * ($(this).prev().children("span").text());
                $(this).next().children("span").text(addprice.toFixed(2))
            })
        },
        del: function() {
            $('.tu').on('click', function() {
                let id = $(this).parent().attr('id');
                let shop = JSON.parse(cookie.get('shop'));
                console.log(shop)
                if (shop.length > 1) {
                    let shopp = shop.filter(elm => {
                        return elm.id != id; //过滤返回id不与按钮相同的商品id
                    })
                    cookie.set("shop", JSON.stringify(shopp), 1); //重新设定cookie
                } else {
                    cookie.remove('shop'); //移除原有cookie
                }
                location.reload();
            })
        }
    }
})