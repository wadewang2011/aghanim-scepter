package com.hxy.courierr.dao.impl;

import org.springframework.stereotype.Repository;

import com.hxy.courierr.DAOSupport;
import com.hxy.courierr.Traveler;
import com.hxy.courierr.dao.TravelerDAO;

@Repository("travelerDao")
public class TravelerDAOImpl extends DAOSupport implements TravelerDAO {

	@Override
	public Traveler getTravelerByWx(String wx) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Traveler getTravelerByPhone(String phones) {
		// TODO Auto-generated method stub
		return null;
	}

}
