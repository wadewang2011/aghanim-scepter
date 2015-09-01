/**
 * 
 */
define(function(require) {

    var RadianceAction = {};

    RadianceAction.model = null;

    RadianceAction.view = null;

    RadianceAction.template = null;

    RadianceAction.enter = function() {

        this.model.load();

        this.view.model = this.model;

        this.view.render();

    }

    return RadianceAction;
});
