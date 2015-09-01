package com.hxy.mekansm.exception;

/**
 * @author xiezhenzong
 *
 */
public class UserException extends BinGodException {

    /**
     * 
     */
    private static final long serialVersionUID = -7126821109623881381L;

    /**
     * 
     */
    public UserException() {
        super();
    }

    /**
     * @param message
     * @param cause
     */
    public UserException(String message, Throwable cause) {
        super(message, cause);
    }

    /**
     * @param message
     */
    public UserException(String message) {
        super(message);
    }

    /**
     * @param cause
     */
    public UserException(Throwable cause) {
        super(cause);
    }

}
