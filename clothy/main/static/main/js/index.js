$(document).ready(function() {
    console.log('index.js');
    $(".img-holder").on('mouseover', function(){
        $(this).find("img").toggleClass('zoom-in');
        $(this).find("img").toggleClass('zoom-out');
    })

    $(".img-holder").on('mouseout', function(){
        $(this).find("img").toggleClass('zoom-in');
        $(this).find("img").toggleClass('zoom-out');
    })
});