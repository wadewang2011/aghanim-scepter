package com.hxy.vanguard.action.user;

import javax.servlet.http.HttpSession;

import lang4.constants.StatusType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hxy.courierr.User;
import com.hxy.dagon.UserService;
import com.hxy.mekansm.exception.BinGodException;
import com.hxy.vanguard.protocol.user.UserLoginReq;
import com.hxy.vanguard.protocol.user.UserLoginResp;

/**
 * @author xiezhenzong
 *
 */
@RestController
public class LoginAction {

    public static final String USER_SESSION_KEY = "__user__session_key__";

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/vanguard/login", method = RequestMethod.POST)
    public UserLoginResp login(@RequestBody UserLoginReq req, HttpSession session) {
        User user = req.data;
        UserLoginResp resp = new UserLoginResp();
        try {
            user = userService.getUser(user);
            if (user != null) {
                resp.data = user;
                session.setAttribute(USER_SESSION_KEY, user);
            } else {
                resp.status = StatusType.WRONG_USER_OR_PWD.code;
            }
        } catch (BinGodException e) {
            resp.status = StatusType.SYS_ERROR.code;
        }
        return resp;
    }

}
