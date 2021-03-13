// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const projectItems = document.querySelectorAll('.project')

// Initialize menu state
let showMenu = false;
let pageLoaded = false;

menuBtn.addEventListener('click', toggleMenu);

if(document.getElementById('home')) {
    for(i = 0; i <= 50; i++) {
        var baseDiv = document.createElement("div");
        baseDiv.classList.add("circle-container");
        var innerDiv = document.createElement("div");
        innerDiv.classList.add("circle");
        baseDiv.appendChild(innerDiv);

        var element = document.getElementById("home");
        element.insertBefore(baseDiv, element.firstElementChild);
    }
}

if(document.getElementById('work')) {
    // window.addEventListener('load', toggleSpinner)    
    // Timer to test spinner
    setTimeout(toggleSpinner, 1500)
}

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set menu state
        showMenu = false;
    }
}

function toggleSpinner() {
    if(!pageLoaded) {
        document.querySelector('.project-box').classList.remove('spinner')
        projectItems.forEach(item => item.style.opacity = "1");
        pageLoaded = true;
    } else {
        document.querySelector('.project-box').classList.add('spinner')
        projectItems.forEach(item => item.style.opacity = '0');
        pageLoaded = false;
    }
}


// window.onload = function() { // same as window.addEventListener('load', (event) => {
//     alert('Page loaded');
//   };