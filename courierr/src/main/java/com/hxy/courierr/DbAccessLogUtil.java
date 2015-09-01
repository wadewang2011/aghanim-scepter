package com.hxy.courierr;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * @author xiezhenzong
 *
 */
public class DbAccessLogUtil {

    private static final Log L = LogFactory.getLog(DbAccessLogUtil.class);

    public static void log(String table, String sql, long timecost, long status) {
        StringBuilder sb = new StringBuilder(64);
        sb.append("[table=").append(table).append("]");
        sb.append("[sql=").append(sql).append("]");
        sb.append("[timecost=").append(timecost).append("]");
        sb.append("[status=").append(status).append("]");
        L.info(sb.toString());
    }

}
