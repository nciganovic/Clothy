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
            $(".navbar").css('box-shadow', '');
        }
    }

    function WhiteNavbarBlackText(){ 
        $(".nav-link").addClass('text-dark');
        $(".nav-link").removeClass('text-light');
        $(".navbar-brand").addClass('text-dark');
        $(".navbar-brand").removeClass('text-light');
        $(".navbar").addClass('set-white-navbar');
        $(".navbar").css('box-shadow', '0px 3px 5px 0px rgba(0,0,0,0.3)');
    }

    $(".navbar").on('mouseover', WhiteNavbarBlackText);
    $(".navbar").on('mouseout', TransparentNavbarWhiteText);

    
    /* Test email field in footer */
    $('#submitEmailBtn').click(function() {
        var isEmailValid = false;
        var rgxEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        isEmailValid = rgxEmail.test($('#sendEmail').val())
        if(!isEmailValid){
            $('#sendEmail').css('border', '1px solid red');
            return false;
        } 
        $('#sendEmail').css('border', '1px solid #ced4da');
        return true;
    })

});



/* START Mobile Navbar */
var navbarBtn = document.querySelectorAll('.navbar-toggler');

navbarBtn[0].addEventListener('click', setNavbar);
navbarBtn[1].addEventListener('click', setNavbar);

var isFullScreen = false;

function setNavbar(){
    console.log('navbar button clicked.')
    //var fullScreenNavbar = document.getElementById('fullscreen-navbar');
    if(!isFullScreen){
        //fullScreenNavbar.style.display = 'block';
        $('#fullscreen-navbar').fadeIn()
        isFullScreen = true;
    }
    else{
        $('#fullscreen-navbar').fadeOut()
        isFullScreen = false;
    }
}
/* END Mobile Navbar */



