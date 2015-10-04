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
            'dots': true,
            'fluid': true
        });

        // 根据轮播图页数设置dots的长度
        sliderContainer.find(".dots").css("width", 60 + option.length * 30);
    };
 
    return Slider;
 });