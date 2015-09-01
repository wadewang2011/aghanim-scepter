/**
 * Copyright (C) 2015 haixiaoyao, Inc. All Rights Reserved.
 */
package com.hxy.mekansm.exception;


/**
 * 
 * 异常顶层类，aghanim－scepter系统的异常都继承这个类
 * 
 * @author xiezhenzong
 *
 */
public class BinGodException extends RuntimeException {

    /**
     * serial version uid
     */
    private static final long serialVersionUID = -4478805925157657995L;

    /**
     * 
     */
    public BinGodException() {
        super();
    }

    /**
     * @param message
     * @param cause
     */
    public BinGodException(String message, Throwable cause) {
        super(message, cause);
    }

    /**
     * @param message
     */
    public BinGodException(String message) {
        super(message);
    }

    /**
     * @param cause
     */
    public BinGodException(Throwable cause) {
        super(cause);
    }

}
