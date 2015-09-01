package com.hxy.dagon.impl;

import lang4.util.S;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hxy.courierr.User;
import com.hxy.courierr.dao.UserDAO;
import com.hxy.dagon.UserService;
import com.hxy.mekansm.exception.BinGodException;

/**
 * 
 * user service
 * 
 * @author xiezhenzong
 *
 */
@Service("userService")
public class UserServiceImpl implements UserService {

    private static final Log L = LogFactory.getLog(UserServiceImpl.class);

    @Autowired
    private UserDAO userDao;

    @Override
    public User getUser(User user) throws BinGodException {
        try {
            if (S.notEmpty(user.wx)) {
                return userDao.getUserByWx(user.wx, user.password);
            } else if (S.notEmpty(user.email)) {
                return userDao.getUserByEmail(user.email, user.password);
            } else {
                return null;
            }
        } catch (Exception e) {
            L.error("login error", e);
            throw new BinGodException("查询用户失败", e);
        }
    }

}
