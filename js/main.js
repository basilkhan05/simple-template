(function(window, $) {
    'use strict';
    // initialize site on load
    $(function() {
        initSimple();
    });



    //Contact Form Popup
    $('.contact-us-button').on('click', function(event) {
        event.preventDefault();
        $('.popup').fadeIn();
    });
    $('.contact-us-button-mobile').on('click', function(event) {
        event.preventDefault();
        $('.popup').fadeIn();
    });

    //Contact Form Close
    $('.close').on('click', function(event) {
        event.preventDefault();
        $('.popup').fadeOut();
    });



    // Scroll menu 
    $('.scroll-spy').on('click', function(event) {
        event.preventDefault();
        $(this.getAttribute("href")).animatescroll({ scrollSpeed: 1000 });
    });


    function initSimple() {
        $('.popup')[0].style.display = 'none';
    }


})(window, jQuery);
