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
        var sliderContainer = $(main);
        sliderContainer.addClass(sliderClass);
        sliderContainer.html(html);

        sliderContainer.unslider({
            'speed': 500,
            'delay': 3000,
            'keys': true,
            'dots': true,
        });
    };
 
    return Slider;
 });