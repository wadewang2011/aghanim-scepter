package com.hxy.courierr.dao.impl;

import org.springframework.stereotype.Repository;

import com.hxy.courierr.DAOSupport;
import com.hxy.courierr.Order;
import com.hxy.courierr.dao.OrderDAO;

@Repository("orderDao")
public class OrderDAOImpl extends DAOSupport implements OrderDAO {

	@Override
	public Order getOrdById(String orderid) {
		// TODO Auto-generated method stub
		return getOrder("select * from  ");
		
	}

	private Order getOrder(String sql) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public void setOrder(){
		
	}

}
