package com.hxy.courierr;


import java.util.Date;
import java.util.List;

public class Order {
	int orderid;
	int routeid;
	long userid;
	long createtime;
	int payway;
	int paystatus;
	int orderstatus;	
	public List<Traveler> UserOrderList;
	public Route RouteInfo;	
	public int number;
	public int sumPrice;
	
	public Order(){
		orderid=setOrderid();
		routeid=getRoute();
		userid=getUser();
		createtime=System.currentTimeMillis(); 
		payway=0;
		paystatus=0;
		orderstatus=0;
		
	}

	public void addTravelers(Traveler tra){
		UserOrderList.add(tra);
	}
	private long getUser() {
		// TODO Auto-generated method stub
		return 0;
	}

	private int getRoute() {
		// TODO Auto-generated method stub
		return 0;
	}

	private int setOrderid() {
		// TODO Auto-generated method stub
		return 0;
	}
	
	private int getOrderid() {
		// TODO Auto-generated method stub
		return orderid;
	}
}
/*
CREATE TABLE `satanic`.`order` (
`orderid` INT  NOT NULL COMMENT 'order id',
`routeid` INT  NOT NULL COMMENT 'route id',
`userid` BIGINT(64) UNSIGNED NOT NULL COMMENT 'user id',
`createtime` DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'time',   
`payway` VARCHAR(2) NOT NULL COMMENT 'zhifufangshi',
`paystatus` VARCHAR(2) NOT NULL COMMENT 'zhifuzhuangtai',
`orderstatus` VARCHAR(2) NOT NULL DEFAULT '00' COMMENT 'dingdanzhuangtai',
`price` INT  NOT NULL COMMENT 'total price',
`number` INT NOT NULL COMMENT 'number'
PRIMARY KEY (`orderid`)  COMMENT '');
*/