/**
 * 
 */
define(function(require) {

    var vanguard = require('vanguard');

    var model = {};

    model.dataSource = null;

    model.load = function(callback) {
        var self = this;
        vanguard.post('/vanguard/hotTravelList', {}, {
            'ok': function(data) {
                self.dataSource = data;
                callback();
            }
        });
    };

    return model;

});
