package com.hxy.vanguard.action.index;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hxy.vanguard.protocol.index.HotTravel;
import com.hxy.vanguard.protocol.index.HotTravelListResponse;

/**
 * @author xiezhenzong
 *
 */
@RestController
public class HotTravelListAction {

    private static final List<HotTravel> hotTrvelList = new ArrayList<HotTravel>(2);

    static {
        hotTrvelList
                .add(createHotTravel(
                        "t640",
                        "大西北",
                        "欠自己的旅行，这个夏天一定要还",
                        "策马奔腾大西北，这里有皑皑雪山，有一望无际戈壁，有五彩斑斓丹霞，有天空之境茶卡盐湖，连绵不绝的油菜花海，青海湖，祁连山，敦煌，莫高窟，月牙泉这些课本才有的词一下蹦出来.",
                        "北京 -- 银川 -- 河西走廊 -- 张掖 -- 七彩丹霞 -- 祁连山 -- 敦煌 -- 莫高窟 -- 沙鸣山月牙泉 -- 柴达木盆地 -- 茶卡盐湖 -- 青海湖-西宁 -- 塔尔寺 -- 门源 -- 西宁 -- 北京",
                        "俯凭驼铃临河套", "./src/img/640.jpg", "大西北"));
        hotTrvelList.add(createHotTravel("t641", "呼伦贝尔", "大草原上的金色童话",
                "呼伦贝尔，这是个让语言变得苍白无力的地方。不来这里，你永远不会明白什么是草原。那种无边无垠辽阔，那种草绿天蓝水清的辉煌惊艳，让我们这些在城市里憋太久的年轻人震撼到脑袋一片空白，感动到只想流泪。",
                "北京 -- 阿尔山 -- 呼伦湖 -- 满洲里 -- 额尔古纳 -- 黑山头 -- 室韦 -- 莫尔道嘎 -- 根河 -- 呼伦贝尔 -- 海拉尔", "黄毯悄然换绿坪",
                "./src/img/641.jpg", "呼伦贝尔"));
    }

    @RequestMapping(value = "/vanguard/hotTravelList", method = RequestMethod.POST)
    public HotTravelListResponse getHotTravelList() {
        HotTravelListResponse resp = new HotTravelListResponse();
        resp.data = hotTrvelList;
        return resp;
    }

    private static HotTravel createHotTravel(String id, String title1, String title2, String desc, String route,
            String ribbonText, String showImg, String showImgDesc) {
        HotTravel travel = new HotTravel();
        travel.id = id;
        travel.title1 = title1;
        travel.title2 = title2;
        travel.desc = desc;
        travel.route = route;
        travel.ribbonText = ribbonText;
        travel.showImg = showImg;
        travel.showImgDesc = showImgDesc;
        return travel;
    }

}
