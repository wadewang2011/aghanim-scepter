/**
 * 
 */
define(function(require) {

    var adminModel = require("admin/adminModel");
    var adminView = require("admin/adminView");

    var adminAction = {};

    /**
     * 进入页面，开启整个action
     */
    adminAction.enter = function() {

        adminModel.request();

        adminView.init();

        adminView.attchModel(adminModel);

        adminView.listen();

    }

    return adminAction;
});
