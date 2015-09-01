CREATE TABLE `satanic`.`user` (
  `userid` BIGINT(64) UNSIGNED NOT NULL COMMENT 'user id',
  `wx` VARCHAR(255) NOT NULL COMMENT '微信号',
  `email` VARCHAR(255) NOT NULL COMMENT '邮箱',
  `password` VARCHAR(255) NOT NULL COMMENT '密码',
  `usertype` INT NOT NULL COMMENT '用户类型',
  `tellphone` VARCHAR(255) NOT NULL COMMENT '',
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '账户创建时间',
  PRIMARY KEY (`userid`, `wx`, `email`)  COMMENT '',
  UNIQUE INDEX `userid_UNIQUE` (`userid` ASC)  COMMENT '',
  UNIQUE INDEX `wx_UNIQUE` (`wx` ASC)  COMMENT '');