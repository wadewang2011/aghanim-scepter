package com.hxy.vanguard.page;

import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author xiezhenzong
 *
 */
@Controller
public class TravelPage {

    private static final Set<String> TRAVEL_IDS = new HashSet<String>();

    static {
        TRAVEL_IDS.add("t640");
        TRAVEL_IDS.add("t641");
    }

    @RequestMapping("/travel/{travelid}")
    public String getTravelPage(@PathVariable String travelid) {
        return TRAVEL_IDS.contains(travelid) ? travelid : "404";
    }

}
