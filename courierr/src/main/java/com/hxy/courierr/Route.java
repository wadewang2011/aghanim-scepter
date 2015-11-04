package com.hxy.courierr;

public class Route {
	 int RouteId;
	 String Name;
	 String Time;
	 String Intro;
	 int Price;
	 int number;
     public Route(){
    	 Intro = null;
    	 number = 0;
     }
     public int getRouteId(){
    	 return RouteId;
     }
     public String getName(){
    	 return Name;
     }
     public String getTime(){
    	 return Time;
     }
     public String getIntro(){
    	 return Intro;
     }
     public int getPrice(){
    	 return Price;
     }
     public void setRouteId(int routeId){
    	 RouteId = routeId;
     }
     public void setName(String name){
    	 Name = name;
     }
     public void setTime(String time){
    	 Time = time;
     }
     public void setIntro(String intro){
    	 Intro = intro;
     }
     public void setPrice(int price){
    	 Price = price;
     }
}
