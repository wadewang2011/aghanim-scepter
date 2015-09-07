/**
 * 
 */
define(function(require) {

    var util = require('er/util');
    var vanguard = require('vanguard');

    var model = require('index/model');
    var view = require('index/view');

    model.load(function() {
        view.model = model;
        view.render();
    });

});
