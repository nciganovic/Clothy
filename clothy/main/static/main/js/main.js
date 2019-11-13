//var navbar = document.querySelector('.navbar');
var navbar = document.getElementsByTagName('nav');
navbar = navbar[0]

var title = document.querySelector('.navbar-brand');

navbar.addEventListener('mouseover', setBlack);
navbar.addEventListener('mouseout', setWhite);

var items = document.getElementsByClassName('nav-link');

function setBlack(){
    for(let i = 0; i < items.length; i++){
        items[i].classList.toggle('text-dark');
        items[i].classList.remove('text-light');
    }
    title.classList.toggle('text-dark');
    title.classList.remove('text-light');
}
function setWhite(){
    for(let i = 0; i < items.length; i++){
        items[i].classList.toggle('text-light');
        items[i].classList.remove('text-dark');
    }
    title.classList.toggle('text-light');
    title.classList.remove('text-dark');
}

var navButton = document.querySelector('.navbar-toggler')
var dropdown = document.querySelector('.collapse');

navButton.addEventListener('click', setFullScreen);

function setFullScreen(){
    if(dropdown.classList.contains('navbar-fullscreen')){
        dropdown.classList.remove('navbar-fullscreen');
    }
    else{
        dropdown.classList.add('navbar-fullscreen');
    }

}