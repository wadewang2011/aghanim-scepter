/**
 * 请求web模块vanguard
 */
define(function(require) {

    var statusMap = {
        'syserror': '100',
        'ok': '200',
        'wrongUserOrPwd': '402'
    };

    function okHanlder(response, successCallback) {
        var status = response.status;
        for (key in successCallback) {
            var keyItems = key.split(',');
            for (item in keyItems) {
                if (statusMap[keyItems[item]] == status) {
                    successCallback[key](response.data, response.status);
                    return;
                }
            }
        }
        console.log('没有处理请求' + path + '的返回结果，data: ' + data);
    }


    function ajax(path, method, data, option) {
        var successCallback = {};
        for (key in option) {
            if (key != 'fail') {
                successCallback[key] = option[key];
            } else {
                failCallback = option[key];
            }
        }

        var failCallback = null;
        failCallback = failCallback
            || function(jqXHR, textStatus, errorThrown) {
                alert('系统错误，status: ' + textStatus + ', error: ' + errorThrown);
            };

//        if (debug) {
//            var mockResponse = require('../../debug/mock').getMockData(path);
//            okHanlder(mockResponse, successCallback);
//            return;
//        }

        $.ajax(path, {
            'contentType': 'application/json;charset=utf-8',
            'method': method,
            'data': JSON.stringify(data)
        }).done(function(response) {
            okHanlder(response, successCallback);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            failCallback(textStatus, errorThrown);
        });
    }

    var vanguard = {};

    vanguard.status = statusMap;

    vanguard.get = function(path, data, option) {
        ajax(path, 'GET', data, option);
    };

    vanguard.post = function(path, data, option) {
        ajax(path, 'POST', data, option);
    };

    return vanguard;
});
