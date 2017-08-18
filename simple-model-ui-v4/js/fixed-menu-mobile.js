
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 173) {
        $('.dropdown').addClass('fixed');
        $('.margin-top-mob').addClass('fixed');
    } else {
        $('.dropdown').removeClass('fixed');
        $('.margin-top-mob').removeClass('fixed');
    }
});
