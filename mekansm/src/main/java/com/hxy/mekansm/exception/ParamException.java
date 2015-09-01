/**
 * Copyright (C) 2015 haixiaoyao, Inc. All Rights Reserved.
 */
package com.hxy.mekansm.exception;


/**
 * 
 * 参数错误异常
 * 
 * @author xiezhenzong
 *
 */
public class ParamException extends BinGodException {

    private static final long serialVersionUID = 7046083631844539407L;

    /**
     * 
     */
    public ParamException() {
        super();
    }

    /**
     * @param message
     * @param cause
     */
    public ParamException(String message, Throwable cause) {
        super(message, cause);
    }

    /**
     * @param message
     */
    public ParamException(String message) {
        super(message);
    }

    /**
     * @param cause
     */
    public ParamException(Throwable cause) {
        super(cause);
    }

}
