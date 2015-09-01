package com.hxy.dagon;

import com.hxy.courierr.User;
import com.hxy.mekansm.exception.BinGodException;

/**
 * @author xiezhenzong
 *
 */
public interface UserService {

    User getUser(User user) throws BinGodException;

}
