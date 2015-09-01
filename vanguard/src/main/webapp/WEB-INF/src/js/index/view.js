/**
 * 
 */
define(function(require) {

    var etpl = require('etpl');
    require('etpl/tpl!./hot_travel_list.tpl');

    var hotClickHandler = function(event) {
        console.log(event);
        var id = $(event.target).closest('.hot').eq(0).attr('id');
        if (id) {
            window.location.href = "/travel/" + id;
        }
    };

    var view = {};

    view.model = null;

    view.render = function() {
        var html = etpl.render('hot-travel-list', {
            hotTravelList: this.model.dataSource
        });
        $('.hots').html(html);

        $('.hot-detail').click(hotClickHandler);
        $('.hot-img').click(hotClickHandler);
    };

    return view;

});
