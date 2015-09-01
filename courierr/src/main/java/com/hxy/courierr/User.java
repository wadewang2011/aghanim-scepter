package com.hxy.courierr;

import java.util.Date;

import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import com.hxy.mekansm.exception.UserException;

/**
 * @author xiezhenzong
 *
 */
public class User {

    public long userid;
    public String wx;
    public String email;
    public String password;
    public Type usertype;
    public String tellphone;
    public Date createTime;

    @Override
    public String toString() {
        return ReflectionToStringBuilder.toString(this, ToStringStyle.SHORT_PREFIX_STYLE);
    }

    public enum Type {

        admin(0), vip(10), traveller(20);

        public int type;

        private Type(int type) {
            this.type = type;
        }

        public static Type parse(int type) {
            for (Type t : values()) {
                if (t.type== type) {
                    return t;
                }
            }
            throw new UserException("Unknown user type, type: " + type);
        }
    }

}
