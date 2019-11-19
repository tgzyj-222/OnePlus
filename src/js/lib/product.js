let baseUrl = "http://127.0.0.1:8080/1910/OnePlus";

define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function(callback) {
            let id = location.search.split('=')[1];
            console.log(id)
            $.ajax({
                url: `${baseUrl}/lib/getitem.php`,
                type: 'get',
                data: {
                    id: id
                },
                dataType: 'json',
                success: function(res) {
                    let pic = JSON.parse(res.pic);
                    let tempstr = `
                                <div class="b-left">
                                    <div class="show-img">
                                        
                                        <img src="${baseUrl}/${pic[1].src}" alt="${pic[1].title}">
                                    </div>
                                    <ul class="s-img">
                                        <img src="${baseUrl}/${pic[1].src}" alt="${pic[3].title}">
                                        <img src="${baseUrl}/${pic[2].src}" alt="${pic[3].title}">
                                        <img src="${baseUrl}/${pic[3].src}" alt="${pic[3].title}">
                                    </ul>
                                </div>
                                <div class="b-right">
                                        <div class="p-title">${res.title}</div>
                                        <div class="p-color">
                                                颜色
                                            <div class="p-color-1">
                                                <span class="color-1"></span>
                                                <span class="color-2">${res.color}</span>
                                             </div>
                                            <div class="p-color-2">
                                                <span class="color-1"></span>
                                                <span class="color-2">${res.color2}</span>
                                            </div>
                                        </div>
                                        <div class="p-price">
                                            <del>￥${res.cost}</del>
                                            <span class="yuan">￥${res.price}</span>
                                        </div>
                                        
                                        <button class="p-show">加入购物车</botton>
                                        <span class="num">库存：${res.num}</span>
                                      
                                </div>
                                `;
                    // <input class="num" type="number" min="1" max="${res.num}" value="1"></input>
                    $('.count').append(tempstr);
                    callback && callback(res.id, res.price);
                }
            })
        },
        addItem: function(id, price, num) {
            let shop = cookie.get('shop'); // 获取cookie数据 判断是否存在
            // 如果有cookie  修改cookie
            // 如果有cookie  添加cookie

            let product = {
                id: id,
                price: price,
                num: num
            };

            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = []; // 购物车没有内容 新建一个购物车
                shop.push(product); //将商品放入购物车
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        }
    }
});