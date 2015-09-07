<!-- target: hot-travel-list -->
<!-- for: ${hotTravelList} as ${hot}, ${index} -->
<div id="${hot.id}" class="hot">
    <div class="row">
        <div class="hot-img-container col-xs-5 col-md-5 col-lg-5">
            <img class="hot-img" alt="${hot.showImgDesc}" src="${hot.showImg}">
        </div>
        <div class="ribbon">
            <span>${hot.ribbonText}</span>
        </div>
        <div class="hot-detail col-xs-7 col-md-7 col-lg-7">
            <div class="panel panel-default">
                <div class="panel-body">
                    <h2>${hot.title1}</h2>
                    <h3>${hot.title2}</h3>
                    <p>${hot.desc}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="travel-route">
            <div class="container-fluid">
                <p>
                    <span>路线：</span>${hot.route}
                </p>
            </div>
        </div>
    </div>
</div>
<!-- if: ${index} < ${hotTravelList.length} -1 -->
<hr>
<!-- /if -->
<!-- /for -->
