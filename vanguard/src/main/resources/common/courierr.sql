CREATE TABLE `satanic`.`user` (
  `userid` BIGINT(64) UNSIGNED NOT NULL COMMENT 'user id',
  `wx` VARCHAR(255) NOT NULL COMMENT '',
  `email` VARCHAR(255) NOT NULL COMMENT '',
  `password` VARCHAR(255) NOT NULL COMMENT '',
  `usertype` INT NOT NULL COMMENT '',
  `tellphone` VARCHAR(255) NOT NULL COMMENT '',
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '',
  PRIMARY KEY (`userid`, `wx`, `email`)  COMMENT '',
  UNIQUE INDEX `userid_UNIQUE` (`userid` ASC)  COMMENT '',
  UNIQUE INDEX `wx_UNIQUE` (`wx` ASC)  COMMENT '');
  
     
   CREATE TABLE `satanic`.`order` (
   `orderid` INT  NOT NULL COMMENT 'order id',
   `routeid` INT  NOT NULL COMMENT 'route id',
   `userid` BIGINT(64) UNSIGNED NOT NULL COMMENT 'user id',
   `createtime` DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'time',   
   `payway` inte NOT NULL COMMENT 'zhifufangshi',
   `paystatus` VARCHAR(2) NOT NULL COMMENT 'zhifuzhuangtai',
   `orderstatus` VARCHAR(2) NOT NULL DEFAULT '00' COMMENT 'dingdanzhuangtai',
   `price` INT  NOT NULL COMMENT 'total price',
   `number` INT NOT NULL COMMENT 'number'
   PRIMARY KEY (`orderid`)  COMMENT '');
  
  CREATE TABLE `satanic`.`traveler` (
  `routeid` INT  NOT NULL COMMENT 'route id',
  `userid` BIGINT(64) UNSIGNED NOT NULL COMMENT 'user id'
  `name` VARCHAR(255)  NOT NULL COMMENT 'name',
  `sex` VARCHAR(255) NOT NULL COMMENT 'sex',
  `id` VARCHAR(255) NOT NULL COMMENT 'id',
  `phone` VARCHAR(255) NOT NULL COMMENT 'phone',
  `weixin` VARCHAR(255) NOT NULL COMMENT 'weixin',
  `emername` VARCHAR(255) NOT NULL COMMENT 'emergency name',
  `emerphon` VARCHAR(255) NOT NULL COMMENT 'emergency phone',  
  `location` VARCHAR(255) NOT NULL COMMENT 'location jiehe & jiesan',
  `email` VARCHAR(255) NOT NULL COMMENT 'email',  
  `other` VARCHAR(255)  COMMENT 'other',
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',
  PRIMARY KEY ( `weixin`, `phone`)  COMMENT '';
  
  CREATE TABLE `satanic`.`route` (
   `routeid` INT  NOT NULL COMMENT 'route id',
   `name` VARCHAR(255)  NOT NULL COMMENT 'name',
   `routetime` VARCHAR(255)  NOT NULL COMMENT 'name',
   `intro` VARCHAR(255) COMMENT 'introduce',
   `price` INT  NOT NULL COMMENT 'price',
   `number` INT NOT NULL COMMENT 'baoming number'
   PRIMARY KEY (`routeid`)  COMMENT '');
