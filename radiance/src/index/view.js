/**
 * 
 */
define(function(require) {

    var Navbar = require('../module/navbar/navbar')

    var etpl = require('etpl');
    require('etpl/tpl!./hot_travel_list.tpl');

    var hotClickHandler = function(event) {
        var id = $(event.target).closest('.hot').eq(0).attr('id');
        if (id) {
            window.location.href = "/travel/" + id;
        }
    };

    var view = {};

    view.model = null;

    view.render = function() {

        new Navbar().render('.header');

        var html = etpl.render('hot-travel-list', {
            hotTravelList: this.model.dataSource
        });
        $('.hots').html(html);

        $('.hot-detail').click(hotClickHandler);
        $('.hot-img').click(hotClickHandler);
    };

    return view;

});
