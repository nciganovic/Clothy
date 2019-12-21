$(document).ready(function(){

    console.log('Modal js works')

    $('.login').click(function(e) {
        e.preventDefault();
        console.log('click login');
        $('#background-modal').fadeIn();
    })

    $('#close-modal').click(function(e) {
        e.preventDefault();
        console.log('login closed');
        $('#background-modal').fadeOut();
    })

    $('.register-modal').click(function(e) {
        e.preventDefault();
        console.log('register open');
        $('#login-modal').hide();
        $('#register-modal').fadeIn();
    })

    $('#id_username').attr('placeholder', 'Username');
    $('#id_email').attr('placeholder', 'Email');
    $('#id_password1').attr('placeholder', 'Password');
    $('#id_password2').attr('placeholder', 'Password');

    $('#id_username').addClass('input'); 
    $('#id_email').addClass('input'); 
    $('#id_password1').addClass('input'); 
    $('#id_password2').addClass('input'); 
})