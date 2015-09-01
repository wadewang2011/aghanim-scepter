package com.hxy.vanguard.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.hxy.courierr.User;
import com.hxy.vanguard.VanguardConstants;

/**
 * Servlet Filter implementation class LoginFilter
 * 
 * @author xiezhenzong
 */
public class LoginFilter implements Filter {

    private static final Log L = LogFactory.getLog(LoginFilter.class);
    private static final String LOGIN_KEY = VanguardConstants.LOGIN_KEY;

    /**
     * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
     */
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException,
            ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        String uri = req.getRequestURI();
        if (uri.startsWith("/ajax") || uri.startsWith("/login.html")) {
            chain.doFilter(request, response);
            return;
        }

        HttpSession session = req.getSession(true);
        User userType = (User) session.getAttribute(LOGIN_KEY);
        if (userType != null) {
            chain.doFilter(request, response);
            return;
        }

        // xiezhenzong: in this version, don't support cookie
        // Cookie[] cookies = req.getCookies();
        // if (A.notEmpty(cookies)) {
        // for (Cookie cookie : cookies) {
        // if (LOGIN_KEY.equals(cookie.getName())) {
        // String userid = cookie.getValue();
        // }
        // }
        // }

        HttpServletResponse resp = (HttpServletResponse) response;
        resp.sendRedirect("/login.html");
        L.info("Request hasn't login, redirect to login, request: " + request);
    }

    /**
     * @see Filter#init(FilterConfig)
     */
    public void init(FilterConfig fConfig) throws ServletException {
    }

    /**
     * @see Filter#destroy()
     */
    public void destroy() {
    }

}
