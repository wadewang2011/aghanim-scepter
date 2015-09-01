package com.hxy.vanguard.protocol;

import com.hxy.mekansm.MekansmObject;

/**
 * @author xiezhenzong
 *
 */
public class ProtocolObject<T> extends MekansmObject {

    public String logid = String.valueOf(System.currentTimeMillis());
    public T data;

}
