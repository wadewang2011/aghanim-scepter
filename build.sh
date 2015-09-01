#!/bin/bash

function exitOnError() {
	if [ ! $? -eq 0 ];then
		exit 1;
	fi
}

mvn clean install