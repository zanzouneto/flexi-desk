$(window).scroll(function(e){
    parallaxScroll();
    handleBackgroundReveal();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    var maxScroll = $(window).height() * 8; // Maximum scroll limit in vh

    scrolled = Math.min(scrolled, maxScroll);
    
    $('.y1').css({'transform': 'translate3d(0,' + scrolled * -1.4 + 'px, 0)'});
    $('.y2').css({'transform': 'translate3d(0,' + scrolled * -1.6 + 'px, 0)'}); 
    $('.y3').css({'transform': 'translate3d(0,' + scrolled * -1.8 + 'px, 0)'});  
    $('.y4').css({'transform': 'translate3d(0,' + scrolled * -2.0 + 'px, 0)'});  
    $('.y5').css({'transform': 'translate3d(0,' + scrolled * -2.2 + 'px, 0)'});  
    $('.y6').css({'transform': 'translate3d(0,' + scrolled * -2.4 + 'px, 0)'});  

    $('.title').css({'transform': 'translate3d(0,' + scrolled * -0.4 + 'px, 0)'});  
    $('.price').css({'transform': 'translate3d(0,' + scrolled * -0.35 + 'px, 0)'}); 

    $('.flexi').css({'transform': 'translate3d(0,' + scrolled * -0.4 + 'px, 0)'});  
    $('.up').css({'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)'});  

    $('.desk').css({'transform': 'translate3d(0,' + scrolled * +0.4 + 'px, 0)'}); 
    $('.down').css({'transform': 'translate3d(0,' + scrolled * +0.3 + 'px, 0)'}); 
}
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; 
    const myDiv = document.getElementById('logo');
    
    if (scrollPosition > window.innerHeight * 0.8) {
      myDiv.classList.add('hidden');
    } else {
      myDiv.classList.remove('hidden');
    }
});

  // Get all buttons with the class 'contact-trigger'
  const contactButtons = document.querySelectorAll('button');
  const popupForm = document.querySelector('.popup');
  const closeButton = document.querySelector('.close');

  // Add click event to all buttons to show the popup
  contactButtons.forEach(button => {
    button.addEventListener('click', function() {
      popupForm.style.display = 'block';
    });
  });

  // Close the popup when the 'x' is clicked
  closeButton.addEventListener('click', function() {
    popupForm.style.display = 'none';
  });

  // Close the popup if the user clicks outside of the form
  window.addEventListener('click', function(event) {
    if (event.target == popupForm) {
      popupForm.style.display = 'none';
    }
  });
