(function(window, $) {
    'use strict';

    //Contact Form Popup
    $('.contact-us-button').on('click', function(event) {
        event.preventDefault();
        location.reload();
    });

    // Scroll menu 
    $('.scroll-spy').on('click', function(event) {
        event.preventDefault();
       $(event.originalEvent.path[1].hash).animatescroll({scrollSpeed:1000});
    });



})(window, jQuery);