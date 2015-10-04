/**
 * 
 */
define(function(require) {

    var vanguard = require('../module/vanguard');
    var srcDir = "/asset"

    var model = {};

    model.dataSource = null;

    model.load = function(callback) {
        // TODO(xiezhenzong): 有时间把这些东西移到数据库里
        this.travelCategory = [{
            'name': '大西北',
            'travelList': [{
                'link': 'http://mp.weixin.qq.com/s?__biz=MzA4MDk4MTMyNA==&mid=208530380&idx=1&sn=8f6be14cd2735dda9d0eefaf33fee215',
                'title1': '大西北',
                'title2': '大西北我来啦',
                'desc': '银川涮羊肉，敦煌赏奇景。策马奔腾大西北，这里有皑皑雪山，有一望无际戈壁，有油菜花海，国庆了给自己放个假吧！',
                'route': '北京--银川--沙坡头--张掖--七彩丹霞--祁连山--敦煌--莫高窟--沙鸣山月牙泉--柴达木盆地--茶卡盐湖--青海湖--兰州--北京',
                'ribbonText': '国庆了，你还不出门？',
                'showImg': srcDir + '/resources/img/page/guoqing.jpg',
                'price': '¥ 3300/人'
            }, {
                'link': 'http://mp.weixin.qq.com/s?__biz=MzA4MDk4MTMyNA==&mid=208527135&idx=1&sn=c1b72de9e75a06c07c861900caef62c7',
                'title1': '呼伦贝尔',
                'title2': '大草原上的金色童话',
                'desc': '呼伦贝尔，这是个让语言变得苍白无力的地方。不来这里，你永远不会明白什么是草原。那种无边无垠辽阔，那种草绿天蓝水清，让我们这些在城市里憋太久的年轻人震撼到脑袋一片空白，感动到只想流泪。',
                'route': '北京--阿尔山--呼伦湖--满洲里--额尔古纳--黑山头--室韦--莫尔道嘎--根河--呼伦贝尔--海拉尔--北京',
                'ribbonText': '骑马浪天涯',
                'showImg': srcDir + '/resources/img/page/neimeng.jpg',
                'price': '¥ 2800/人'
            },{
                'link': 'http://mp.weixin.qq.com/s?__biz=MzA4MDk4MTMyNA==&mid=208740617&idx=1&sn=8fda9da16c87a39e93c4b0e8b2a00b6d',
                'title1': '秋之甘南',
                'title2': '你所梦想之地',
                'desc': '拉卜楞寺的辩经声随着炊烟一同升起，草原上沁入心脾的酥油香久未散去，郎木寺如世外桃源般遗世独立，扎尕那峥嵘的石城在云雾中若隐若现……这里是圣境天堂般的甘南',
                'route': '北京--兰州--夏河--拉卜楞寺--桑科草原--尕海湖--迭部--扎尕那--迭部--若尔盖--九曲黄河--唐克--花湖--郎木寺--合作--米拉日巴佛阁--兰州--北京',
                'ribbonText': '秋之甘南',
                'showImg': srcDir + '/resources/img/page/gannan.jpg',
                'price': '¥ 3200/人'
            }]
        }, {
            'name': '四川',
            'travelList': [{
                'link': 'http://mp.weixin.qq.com/s?__biz=MzA4MDk4MTMyNA==&mid=208753678&idx=1&sn=dc856b1f4c8e4eb6306f0f1fd6540530',
                'title1': '川西',
                'title2': '荡涤心灵的朝圣之旅',
                'desc': '越过山脉，那满坑满谷连绵蔓延的红色，在夕阳下闪闪发光，这些成千上万的红色僧舍，都是由僧尼们亲手搭建，当你立于山顶俯瞰，定会直震心灵。',
                'route': '北京-成都-理县-阿坝县-青海久治-年保玉则-斑马-色达-炉霍-道孚-八美-塔公-新都桥-康定-泸定-雅安-成都-北京',
                'ribbonText': '荡涤心灵的朝圣之旅',
                'showImg': srcDir + '/resources/img/page/chuanxinan.jpg',
                'price': '¥ 2400/人'
            }]
        },{
            'name': '南方',
            'travelList': [{
                'link': 'http://mp.weixin.qq.com/s?__biz=MzA4MDk4MTMyNA==&mid=208754155&idx=1&sn=9e6c024823736676fafe7ebada848d0e',
                'title1': '非凡美境魅力湘西',
                'title2': '噢噢噢噢好，我带你去看世界',
                'desc': '古城揽胜、闲步老街、游苗寨看表演、登高张家界。赏尽张家界、凤凰风光，尝遍湖南美食，领略少数民族的风情。逃离闹市，回归自然，圆一个返朴归真的梦。',
                'route': '北京—张家界—武陵源、黄石寨—袁家界、杨家界、天子山—金鞭溪、十里画廊—张家界大峡谷、黄龙洞—芙蓉古镇、坐龙峡、凤凰古城—北京',
                'ribbonText': '非凡美境魅力湘西',
                'showImg': srcDir + '/resources/img/page/xiangxi.jpg',
                'price': '¥ 3000/人'
            }, {
                'link': 'http://mp.weixin.qq.com/s?__biz=MzA4MDk4MTMyNA==&mid=208779885&idx=1&sn=20ef86e8d474b784633f092f9401514b',
                'title1': '梦幻黄山之旅',
                'title2': '逍遥君陪你梦游仙境',
                'desc': '黄山以奇松、怪石、云海、温泉、冬雪“五绝”著称于世，拥有“天下第一奇山”之称。而铸就五绝的不可不提八十二座山峰，尤以天都峰、莲花峰、光明顶三大主峰最惹人神往。',
                'route': '北京-黄山-画里乡村-宏村-木坑竹海-江南古镇-同里-北京',
                'ribbonText': '梦幻黄山之旅',
                'showImg': srcDir + '/resources/img/page/huangshan.jpg',
                'price': '¥ 900/人'
            }]
        },{
            'name': '山西',
            'travelList': [{
                'link': 'http://mp.weixin.qq.com/s?__biz=MzA4MDk4MTMyNA==&mid=208782925&idx=1&sn=e6d8311266cd5db80cfe4ad63b54944a',
                'title1': '古城山西',
                'title2': '你就不想知道大宅院里的故事？',
                'desc': '山西，宁静中寻找儒雅，晋商的院落叠加，古镇的平和安逸， 一段精彩的旅程，着眼于边边角角，找寻不被留意的小玩物，小美景，假期和你相遇山西......',
                'route': '北京—悬空寺—恒山—大同—云冈石窟—乔家大院—平遥古城—王家大院—北京',
                'ribbonText': '旧时岁月',
                'showImg': srcDir + '/resources/img/page/shangxi.jpg',
                'price': '¥ 2000/人'
            }]
        }];
        this.sliderContent = [{
            'title': '大西北国庆特别篇',
            'detail': '趁年轻，一路狂欢奔向大西北',
            'link': 'http://mp.weixin.qq.com/s?__biz=MzA4MDk4MTMyNA==&mid=208530380&idx=1&sn=8f6be14cd2735dda9d0eefaf33fee215',
            'img': srcDir + '/resources/img/slider/xibei.jpg'
        }, {
            'title': '呼伦贝尔',
            'detail': '大草原上的金色童话',
            'link': 'http://mp.weixin.qq.com/s?__biz=MzA4MDk4MTMyNA==&mid=208527135&idx=1&sn=c1b72de9e75a06c07c861900caef62c7',
            'img': srcDir + '/resources/img/slider/neimeng.jpg'
        }, {
            'title': '湘西',
            'detail': '非凡美境魅力湘西',
            'link': 'http://mp.weixin.qq.com/s?__biz=MzA4MDk4MTMyNA==&mid=208754155&idx=1&sn=9e6c024823736676fafe7ebada848d0e',
            'img': srcDir + '/resources/img/slider/xiangxi.jpg'
        }, {
            'title': '川西',
            'detail': '荡涤心灵的朝圣之旅',
            'link': 'http://mp.weixin.qq.com/s?__biz=MzA4MDk4MTMyNA==&mid=208753678&idx=1&sn=dc856b1f4c8e4eb6306f0f1fd6540530',
            'img': srcDir + '/resources/img/slider/chuanxinan.jpg'
        }];
        callback();
    };

    return model;

});
