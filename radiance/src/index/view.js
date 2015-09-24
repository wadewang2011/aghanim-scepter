/**
 * 
 */
define(function(require) {

    var Navbar = require('../module/navbar/navbar');
    var Slider = require('../module/slider/slider');
    var Footer = require('../module/footer/footer');

    var etpl = require('etpl');
    require('etpl/tpl!./hot_travel_list.tpl');

    var hotClickHandler = function(event) {
        var id = $(event.target).closest('.hot').eq(0).attr('id');
        if (id) {
            window.location.href = "/travel/" + id;
        }
    };

    var sliderContent = [{
        'title': 'oooh',
        'detail': 'hello world',
        'link': '/index',
        'img': '/asset/resources/img/640.jpg'
    }, {
        'title': 'no',
        'detail': 'good bye',
        'link': '/index',
        'img': '/asset/resources/img/641.jpg'
    }];

    var view = {};

    view.model = null;

    view.render = function() {

        new Navbar().render('.header');
        new Slider().render('.intro', sliderContent);
        new Footer().render('.footer');

        var html = etpl.render('hot-travel-list', {
            hotTravelList: this.model.dataSource
        });
        $('.hots').html(html);

        $('.hot-detail').click(hotClickHandler);
        $('.hot-img').click(hotClickHandler);
    };

    return view;

});
