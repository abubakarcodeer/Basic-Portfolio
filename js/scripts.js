let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

//  <!----------------- Handling Menu on Mobile Screen ------------------>
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

//  <!----------------- Handling Navbar Active State ------------------>
navLinks.forEach(link => {
    link.onclick = () => {

        navLinks.forEach(l => l.classList.remove('active'));

        link.classList.add('active');

        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };
});

//  <!----------------- Handling Menu hide on Mobile Screen when Scroll ------------------>
window.onscroll = () => {

        let headers = document.querySelector('header');
        headers.classList.toggle('sticky', window.scrollY > 100);

        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
};
   
//  <!----------------- Hanlding Mutliple Text Box in Home Section ------------------>
    const typed = new Typed('.multiple-text',
    {
        strings:['Frontend Developer', 'Mobile App Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
   