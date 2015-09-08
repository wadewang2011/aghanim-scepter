/**
 * 
 */
define(function(require) {
    var model = require('./model');
    var view = require('./view');

    model.load(function() {
        view.model = model;
        view.render();
    });
});
