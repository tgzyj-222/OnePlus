let baseUrl = "http://127.0.0.1:8080/1910/OnePlus";

define(['jquery'], function($) {
    return {
        render: function() {
            $.ajax({
                url: `${baseUrl}/lib/getall.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    console.log(res);
                    let temp = '';
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        // console.log(`${baseUrl}/src/html/shop.html?id=${elm.id}`);
                        temp += `
                            <li class="item colo-md-3">
                                <a href="${baseUrl}/src/html/shop.html?id=${elm.id}">
                                     <span class="p-discount">
                                     <p class="p-p1">${elm.discount}</p>
                                     </span>
                                    <div class="p-pic">
                                       <img class="lazy" data-original="${baseUrl}/${pic[0].src}" alt="${pic[0].title}">
                                    </div>
                                    <div class="p-title">
                                        ${elm.title}
                                    </div>
                                    <div class="p-price">
                                        <del>最低价￥${elm.cost}</del>
                                        <span class="yuan">￥</span>${elm.price}
                                    </div>  
                                </a>
                            </li>`;

                    });
                    $('.list').append(temp);
                    $("img").lazyload({ effect: "fadeIn" });

                }
            })
        }
    }
});