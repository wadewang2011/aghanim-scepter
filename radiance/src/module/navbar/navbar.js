/**
 * 导航栏
 */
define(function(require) {

    var etpl = require('etpl');
    require('etpl/tpl!./navbar.tpl');

    var navbarClass = 'navbar-container';

    function Navbar() {

    }

    Navbar.prototype.render = function(main, option) {
      
		var html = etpl.render('navbar');
        var navbarContainer = $(main);
        navbarContainer.addClass(navbarClass);
        navbarContainer.html(html);

    };

    return Navbar;
});
