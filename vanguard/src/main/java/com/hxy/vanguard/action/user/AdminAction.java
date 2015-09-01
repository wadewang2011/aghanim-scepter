package com.hxy.vanguard.action.user;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hxy.courierr.User;

/**
 * @author xiezhenzong
 *
 */
@Controller
@RequestMapping("/admin")
public class AdminAction {

    private static final String USER_SESSION_KEY = LoginAction.USER_SESSION_KEY;

    @RequestMapping("/{wx}")
    public String getUserHomePage(@PathVariable String wx, Model model, HttpSession session) {
        User curUser = (User) session.getAttribute(USER_SESSION_KEY);
        if (curUser == null || !curUser.wx.equals(wx) || User.Type.admin != curUser.usertype) {
            return "redirect:noauth.html";
        }
        model.addAttribute("curWx", curUser.wx);
        return "f_admin";
    }

}
