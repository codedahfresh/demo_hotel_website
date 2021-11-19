const togglerButton = document.getElementsByClassName('toggle')[0];
const navLinks = document.getElementsByClassName('navlinks')[0];

togglerButton.addEventListener('click', ()=> {
    navLinks.classList.toggle('active');
});

// the code above helps us to click the hamburger to display the 
// the nav-links and re-clicking it removes the navlinks too