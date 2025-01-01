// for animation
AOS.init();


document.getElementById('menu-icon').addEventListener('click', function () {
    var menu = document.getElementById('menu-links');
    menu.classList.toggle('active'); // Toggle the menu visibility
});

// Close menu when a link is clicked
const menuLinks = document.querySelectorAll('.menu-links a');
menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        var menu = document.getElementById('menu-links');
        menu.classList.remove('active'); // Close the menu when a link is clicked
    });
});


// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 300px from the top of the document
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll the page to the top when the button is clicked
scrollToTopBtn.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
};
