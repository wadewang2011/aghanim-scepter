/**
 * 
 */
define(function(require) {

    var Navbar = require('../module/navbar/navbar');
    var Slider = require('../module/slider/slider');
    var Footer = require('../module/footer/footer');

    var etpl = require('etpl');
    require('etpl/tpl!./travel_list.tpl');

    var view = {};

    view.model = null;

    view.render = function() {

        new Navbar().render('.header');
        new Slider().render('.intro', this.model.sliderContent);
        new Footer().render('.footer');

        var html = etpl.render('travel-category', {
            travelCategory: this.model.travelCategory
        });
        $('.travels').html(html);

        var allPopovers = $('.image-popover');
        var indexOfAllPopvers = 0;
        $.each(this.model.travelCategory, function(i, item){
            var indexOfPlacement = 1;
            $.each(item.travelList, function(j, travel) {
                $(allPopovers[indexOfAllPopvers++]).popover({
                    'container': 'body',
                    'trigger': 'hover',
                    'html': true,
                    'placement': indexOfPlacement++  % 3 == 0 ? 'left' : 'right',
                    'title': travel.title1,
                    'content': etpl.render('travel-popover', {
                        'travel': travel
                    })
                }).on('mouseenter', function(){
                    /** 为了给这个popover添加css不影响其他的popover，这里添加一个class，通过这个class来加css*/
                    $(".popover").addClass("travel-detail");
                });
            });
        });
    };

    return view;

});
