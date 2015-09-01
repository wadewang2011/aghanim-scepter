package com.hxy.vanguard.action.user;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hxy.courierr.User;

/**
 * 处理用户相关的页面请求
 * 
 * @author xiezhenzong
 *
 */
@Controller
@RequestMapping("/u")
public class UserAction {

    private static final String USER_SESSION_KEY = LoginAction.USER_SESSION_KEY;

    @RequestMapping(value = "/{wx}")
    public String getUserHomePage(@PathVariable String wx, Model model, HttpSession session) {
        boolean isLogin = false;
        boolean isCurUser = false;
        boolean isAdmin = false;
        
        User curUser = (User) session.getAttribute(USER_SESSION_KEY);
        if (curUser != null) {
            isLogin = true;
            if (curUser.wx.equals(wx)) {
                isCurUser = true;
            }
            if (User.Type.admin == curUser.usertype) {
                isAdmin = true;
            }
        }
        model.addAttribute("isLogin", isLogin);
        model.addAttribute("isCurUser", isCurUser);
        model.addAttribute("isAdmin", isAdmin);
        model.addAttribute("uWx", wx);
        model.addAttribute("curWx", curUser.wx);
        return "f_uhome";
    }

}
