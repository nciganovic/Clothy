var navbar = document.getElementsByTagName('nav');
navbar = navbar[0]

var title = document.querySelector('.navbar-brand');

navbar.addEventListener('mouseover', setBlack);
navbar.addEventListener('mouseout', setWhite);

var items = document.getElementsByClassName('nav-link');

function setBlack(){
    if(!isScrolling){
        for(let i = 0; i < items.length; i++){
            items[i].classList.add('text-dark');
            items[i].classList.remove('text-light');
        }
        title.classList.add('text-dark'); 
        title.classList.remove('text-light');
    }
}
function setWhite(){
    if(!isScrolling){
        for(let i = 0; i < items.length; i++){
            items[i].classList.add('text-light');
            items[i].classList.remove('text-dark');
        }
        title.classList.add('text-light');
        title.classList.remove('text-dark');
    }
}

var navbarBtn = document.querySelectorAll('.navbar-toggler');

navbarBtn[0].addEventListener('click', setNavbar);
navbarBtn[1].addEventListener('click', setNavbar);

var isFullScreen = false;

function setNavbar(){
    console.log('navbar button clicked.')
    var fullScreenNavbar = document.getElementById('fullscreen-navbar');
    if(!isFullScreen){
        fullScreenNavbar.style.display = 'block';
        isFullScreen = true;
    }
    else{
        fullScreenNavbar.style.display = 'none';
        isFullScreen = false;
    }
}

var isScrolling = false;

$( document ).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop()  > 5 ){
            $(".navbar").addClass('set-white');
            setBlack();
            isScrolling = true;
        }
        else{
            $(".navbar").removeClass('set-white');
            isScrolling = false;
            setWhite();
            console.log('Navbar on top.');
        }
    });
});

