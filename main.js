/*===================popup========================*/

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.
            display="block";
        },
        1000
    )
});



document.querySelector("#close").addEventListener
("click", function(){
        document.querySelector(".popup").Style.display="none";
});

/*=============================toggle icon navbar===========================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*===========================scroll section active link=================================*/

let section = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    Selection.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classlist.remove('active');
                document.queryselection('header nav a[href*='+ id + ']').classlist.add('active');
            });
        };
    });

    /*==============================sticky navbar ===========================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    /*==============================remove toggle icon and navbar============================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
/*==============================scroll reveal============================*/
ScrollReveal ({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading' , {orgin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .education-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', {orgin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {orgin: 'right'});

