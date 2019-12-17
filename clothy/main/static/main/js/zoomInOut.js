$(document).ready(function() {
    /* Zoom in and zoom out on hover */
    $(".img-holder").on('mouseover', function(){
        $(this).find("img").toggleClass('zoom-in');
        $(this).find("img").toggleClass('zoom-out');
    })

    $(".img-holder").on('mouseout', function(){
        $(this).find("img").toggleClass('zoom-in');
        $(this).find("img").toggleClass('zoom-out');
    })

})