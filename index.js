$(window).scroll(function(e){
    parallaxScroll();
    handleBackgroundReveal();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.y1').css({'transform': 'translate3d(0,' + scrolled * -1.4 + 'px, 0)'});
    $('.y2').css({'transform': 'translate3d(0,' + scrolled * -1.6 + 'px, 0)'}); 
    $('.y3').css({'transform': 'translate3d(0,' + scrolled * -1.8 + 'px, 0)'});  
    $('.y4').css({'transform': 'translate3d(0,' + scrolled * -2.0 + 'px, 0)'});  
    $('.y5').css({'transform': 'translate3d(0,' + scrolled * -2.2 + 'px, 0)'});  
    $('.y6').css({'transform': 'translate3d(0,' + scrolled * -2.4 + 'px, 0)'});  

    $('.title').css({'transform': 'translate3d(0,' + scrolled * -0.5 + 'px, 0)'});  
    $('.price').css({'transform': 'translate3d(0,' + scrolled * -0.5 + 'px, 0)'}); 
}

