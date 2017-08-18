$(function(){
	if (screen && screen.width < 376) {
    $('html, body').animate({
        scrollTop: $('.no-padding-mobile').offset().top
    }, 250);
    return false;}
});
