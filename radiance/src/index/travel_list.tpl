<!-- target: travel-category -->
<!-- for: ${travelCategory} as ${category} -->
<div class="travel-category">
    <div class="title container-fluid">
        <div class="title-before"></div>
        <h1>${category.name}</h1>
    </div>
    <div class="list">
        <div class="row">
            <!-- for: ${category.travelList} as ${travel}, ${index} -->
            <div class="travel">
                <div class="travel-container col-xs-4 col-md-4 col-lg-4">
                    <div class="ribbon">
                        <span>${travel.ribbonText}</span>
                    </div>
                    <a class="image-popover" href="${travel.link}" rel="popover" target="_blank">
                        <img class="image " alt="${travel.title1}" src="${travel.showImg}">
                    </a>
                </div>
            </div>
            <!-- /for -->
        </div>
    </div>
</div>
<!-- /for -->

<!-- target: travel-popover -->
<div class="travel-content">
    <h3>${travel.title2}</h3>
    <p class="travel-desc">${travel.desc}</p>
    <p class="travel-route">
        <span>路线：</span>${travel.route}
    </p>
    <p class="travel-price">
        <span>价格：</span>${travel.price}
    </p>
</div>