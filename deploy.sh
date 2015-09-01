#!/bin/bash

source ./build.sh
sh ./build.sh
exitOnError

TOMCAT_HOME="/Users/xiezhenzong/Software/apache-tomcat-7.0.63"

cp ./vanguard/target/vanguard.war ${TOMCAT_HOME}/webapps
sh ${TOMCAT_HOME}/bin/startup.sh
exitOnError