// Select the menu icon and navigation links
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to the menu icon
menuIcon.onclick = () => {
    // Toggle the 'active' class on the navigation links
    navLinks.classList.toggle('active');
};