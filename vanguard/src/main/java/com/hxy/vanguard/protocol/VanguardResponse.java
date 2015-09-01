package com.hxy.vanguard.protocol;

import java.util.Map;

import lang4.constants.StatusType;

/**
 * @author xiezhenzong
 *
 */
public class VanguardResponse<T> extends ProtocolObject<T> {

    public int status = StatusType.OK.code;
    public Map<String, Object> common;

}
