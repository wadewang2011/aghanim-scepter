/**
 * 
 */
define(function(require) {

    var vanguard = require('../module/vanguard');

    var model = {};

    model.dataSource = null;

    model.load = function(callback) {
        var self = this;
        vanguard.post('/vanguard/hotTravelList', {}, {
            'ok': function(data) {
                console.log("....");
                self.dataSource = data;
                callback();
            }
        });
    };

    return model;

});
