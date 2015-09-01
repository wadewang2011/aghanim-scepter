package com.hxy.courierr.dao;

import com.hxy.courierr.User;

/**
 * @author xiezhenzong
 *
 */
public interface UserDAO {

    User getUserByWx(String wx, String password);

    User getUserByEmail(String email, String password);

}
