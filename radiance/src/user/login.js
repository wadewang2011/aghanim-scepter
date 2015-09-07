/**
 * 
 */
define(function(require) {

    var util = require('lib/util');
    var vanguard = require('vanguard');

    function createUser(account, pwd) {
        if (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(account)) {
            return {
                'email': account,
                'password': pwd
            };
        } else {
            return {
                'wx': account,
                'password': pwd
            };
        }
    }

    $('#login-btn').click(function() {
        var account = $('#account-input').val();
        var pwd = $('#pwd-input').val();
        if (account == null || account == '') {
            alter('请输入微信号或者邮箱');
        }
        if (pwd == null || pwd == '') {
            alter('请输入密码');
        }
        var user = createUser(account, pwd);
        vanguard.post('/vanguard/login', {
            'logid': util.guid(),
            'data': user
        }, {
            'ok': function(data) {
                window.location.href = '/u/' + data.wx;
            },
            'wrongUserOrPwd': function(data) {
            }
        });
    });
});
