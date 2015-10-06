/**
 * 轮播图
 */
 define(function (require) {
 
 	var etpl = require('etpl');
    require('etpl/tpl!./slider.tpl');

    var sliderClass = 'slider-container';

    function Slider() {
    }

    Slider.prototype.render = function(main, option) {
    	var html = etpl.render('slider', {
    		'sliderContent': option
    	});
        var sliderContainerParent = $(main);
        sliderContainerParent.html(html);

        sliderContainerParent.children('.' + sliderClass).carousel();
    };
 
    return Slider;
 });