package com.hxy.courierr;

public class Traveler {
	int RouteId;
	String Name;
	String Sex;
	String ID;
	String Phone;
	String Weixin;
	String Emergency_Name;
	String Emergency_Phone;
	String Location;
	String Email;
	String Other;
	public Traveler(){
		Other = null;
	}
	public int getRoute(){
		return RouteId;
	}
	public String getName(){
		return Name;
	}
	public String getSex(){
		return Sex;
	}
	public String getID(){
		return ID;
	}
	public String getPhone(){
		return Phone;
	}
	public String getWeixin(){
		return Weixin;
	}
	public String getEmerName(){
		return Emergency_Name;
	}
	public String getEmerPhon(){
		return Emergency_Phone;
	}
	public String getLocation(){
		return Location;
	}
	public String getEmail(){
		return Email;
	}
	public String getOther(){
		return Other;
	}
	public void setRoute(int route){
		RouteId = route;
	}
	public void setName(String name){
		Name = name;
	}
	public void setSex(String sex){
		Sex = sex;
	}
	public void setID(String id){
		ID = id;
	}
	public void setPhone(String phone){
		Phone = phone;
	}
	public void setWeixin(String wx){
		Weixin = wx;
	}
	public void setEmerName(String e_m){
		Emergency_Name = e_m;
	}
	public void setEmerPhon(String e_p){
		Emergency_Phone = e_p;
	}
	public void setLocatiom(String loca){
		Location = loca;
	}
	public void setEmail(String email){
		Email = email;
	}
	public void setOther(String other){
		Other = other;
	}

}
/*
 * 
 * 路线 文本框（例如：大西北）
时间 文本框（例如：2015.10.1-2015.10.7）

姓名 输入框 string
性别 单选框（男、女） char
身份证 输入框 string（前台加个判断，要求输入的是18位数字，并且校验一下是否符合身份证校验规则，不符则提示。存到数据库的时候用string类型）
手机 输入框 string（前台加个判断，要求输入的是11位数字，不符不符则提示。存储用string）
微信 输入框 string
紧急联系人姓名 输入框 string
紧急联系人电话 输入框 string（前台加个判断，要求输入的是11位数字，不符不符则提示。存储用string）
集合、解散地点 单选框 char（例：北京集合+北京解散，银川集合+兰州解散）
合同接收邮箱 输入框 string
其他要求 输入 string

添加一个小伙伴（多人报名的话可以把上面的重复一边）

总价格 文本框（例如：2800）
 */
