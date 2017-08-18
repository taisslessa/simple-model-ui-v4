$( document ).ready(function() {

    $(window).bind('scroll', function () {
        
        if ($(window).scrollTop() > 88)
            $('.top-nav').addClass('nav-down');
        else
            $('.top-nav').removeClass('nav-down');
    });


    // Hide Header on on scroll down
    var lastScrollTop = 0;
    var delta = 10;
    var navbarHeight = $('.top-nav').outerHeight();

    $(window).scroll(function(event){
        
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.top-nav').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.top-nav').removeClass('nav-up');
            }
        }
        
        lastScrollTop = st;
    });

});