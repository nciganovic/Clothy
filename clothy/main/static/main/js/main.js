$(document).ready(function() {
    var isScrolling = false;
    var distanceToTriggerChange = 5;

    if($('.container-fluid').hasClass('nav-white')){
        distanceToTriggerChange = -1;
    }
    
    /* test what is postion on refresh screen*/
    if ($(this).scrollTop()  > distanceToTriggerChange ){
        WhiteNavbarBlackText();
        isScrolling = true;
    }
    $(window).scroll(function () {
        if ($(this).scrollTop()  > distanceToTriggerChange ){
            WhiteNavbarBlackText();
            isScrolling = true;
        }
        else{
            TransparentNavbarWhiteText();
            isScrolling = false;
        }
    });

    function TransparentNavbarWhiteText(){
        if(!isScrolling){
            $(".nav-link").addClass('text-light');
            $(".nav-link").removeClass('text-dark');
            $(".navbar-brand").addClass('text-light');
            $(".navbar-brand").removeClass('text-dark');
            $(".navbar").removeClass('set-white-navbar');
        }
    }

    function WhiteNavbarBlackText(){ 
        $(".nav-link").addClass('text-dark');
        $(".nav-link").removeClass('text-light');
        $(".navbar-brand").addClass('text-dark');
        $(".navbar-brand").removeClass('text-light');
        $(".navbar").addClass('set-white-navbar');
    }

    $(".navbar").on('mouseover', WhiteNavbarBlackText);
    $(".navbar").on('mouseout', TransparentNavbarWhiteText);

});



/* START Mobile Navbar */
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
/* END Mobile Navbar */


