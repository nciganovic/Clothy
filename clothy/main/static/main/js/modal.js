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
})