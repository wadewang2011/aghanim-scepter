#!/bin/bash

function exitOnError() {
	if [ ${?} -ne 0 ];then
		exit 1
	fi
}

cd ./radiance

edp build

exitOnError

cd ..

mv ./radiance/output/* ./vanguard/src/main/webapp/WEB-INF/ && rm -rf ./radiance/output

mvn clean install

exitOnError

cd ./vanguard/src/main/webapp/WEB-INF/

rm -rf asset/ dep/ tool/ *.html

cp ./vanguard/target/vanguard.war .