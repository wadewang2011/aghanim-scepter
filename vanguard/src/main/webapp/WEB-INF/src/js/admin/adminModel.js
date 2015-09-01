/**
 * 
 */
define(function(require) {

    var vanguard = require('vanguard');

    var adminModel = {};

    adminModel.request = function() {
        vanguard.get('/admin/travellist', {

        }, {
            'ok': function(data, status) {

            },
        });
    }

    return adminModel;
});
