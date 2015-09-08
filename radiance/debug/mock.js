/**
 * mock data
 */
 define(function(require){

 	var __Inner_Table = {
 		'/vanguard/hotTravelList': require('./index/hotTravelList')
 	}

 	var mock = {

 		getMockData: function(path) {
 			if (!path) {
 				throw new Error("If you want get mock data, you can't pass a null path argument");
 			}
 			return __Inner_Table[path];
 		}

 	}

 	return mock;
 });