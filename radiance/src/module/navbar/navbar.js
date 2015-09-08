/**
 * 导航栏模块
 */
define(function(require) {

    var etpl = require('etpl');
    require('etpl/tpl!./navbar.tpl');

    function Navbar() {

    }

    Navbar.prototype.render = function(main, option) {
      
		var html = etpl.render('navbar');
        $(main).html(html);

    };

    return Navbar;
});
