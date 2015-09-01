package com.hxy.courierr.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import lang4.util.C;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.hxy.courierr.DAOSupport;
import com.hxy.courierr.User;
import com.hxy.courierr.dao.UserDAO;

/**
 * @author xiezhenzong
 *
 */
@Repository("userDao")
public class UserDAOImpl extends DAOSupport implements UserDAO {

    @Override
    public User getUserByWx(String wx, String password) {
        return getUser("select * from user where wx=? and password=password(?);", wx, password);
    }

    @Override
    public User getUserByEmail(String email, String password) {
        return getUser("select * from user where email=? and password=password(?);", email, password);
    }

    private User getUser(String sql, Object...params) {
        List<User> user = getJdbcTemplate().query(sql, new RowMapper<User>() {

            @Override
            public User mapRow(ResultSet rs, int rowNum) throws SQLException {
                User user = new User();
                user.userid = rs.getLong("userid");
                user.wx = rs.getString("wx");
                user.email = rs.getString("email");
                user.usertype = User.Type.parse(rs.getInt("usertype"));
                user.tellphone = rs.getString("tellphone");
                user.createTime = rs.getDate("create_time");
                return user;
            }

        }, params);
        if (C.isEmpty(user)) {
            return null;
        } else {
            return user.get(0);
        }

    }

}
