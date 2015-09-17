/**
 * footer
 */
define(function(require) {

    var etpl = require('etpl');
    require('etpl/tpl!./footer.tpl');

    var footerClass = 'footer-container';

    function Footer() {

    }

    Footer.prototype.render = function(main, option) {
      
		var html = etpl.render('footer');
        var footerContainer = $(main);
        footerContainer.addClass(footerClass);
        footerContainer.html(html);

    };

    return Footer;
});
