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

// Handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const woodColor = formData.get('wood-color'); // Use the correct name attribute
    const size = formData.get('size');
    const address = formData.get('address');
    const accessories = formData.getAll('accessories').join(', ');

    // Create message string
    const message = `
        New Order Received:
        Name: ${name}
        Phone: ${phone}
        Wood Color: ${woodColor}
        Size: ${size}
        Address: ${address}
        Accessories: ${accessories}
    `;

    // Telegram bot token and chat ID
    const botToken = '7563984639:AAEAcM3TZeTH0EmQZLZgG3i3LIOhmlusASM'; // Replace with your bot token
    const chatId = '645254859'; // Replace with your chat ID or use your user ID

    // Send the message to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(telegramUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Your order has been sent!');
            // Optionally, close the popup or reset the form here
            popupForm.style.display = 'none';
            event.target.reset(); // Reset the form
        } else {
            alert('Failed to send order: ' + data.description);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send order. Please try again later.');
    });
}
