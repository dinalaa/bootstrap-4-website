$(document).ready(function(){
    var upperH = $('.upper-bar').innerHeight(),
    navH = $('.navbar').innerHeight(),
    winH  = $(window).height();
    $('.slider, .carousel-item').height(winH - (upperH + navH));
    // featured work shuffle images
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).data('class'));
        if($(this).data('class') === '.all'){
            $('.shuffle-imgs .col-sm').css('opacity', '1');
        } else{
            $('.shuffle-imgs .col-sm').css('opacity', '.05');
            $($(this).data('class')).parent().css('opacity', '1');
        }
    });
});