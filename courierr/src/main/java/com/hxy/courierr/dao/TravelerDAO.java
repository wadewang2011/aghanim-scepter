package com.hxy.courierr.dao;

import com.hxy.courierr.Traveler;

public interface TravelerDAO {
	
	Traveler getTravelerByWx(String wx);
	
	Traveler getTravelerByPhone(String phone);

}

