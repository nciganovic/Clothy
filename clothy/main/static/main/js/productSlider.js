$(document).ready(function() {
    var currentImg = 0;

    function changeImage(x) {
        $('.product-image').each(function(i) {
            if(x == i){
                $(this).fadeIn();
            }
            else{
                $(this).hide();
            }
        })
    }

    changeImage(currentImg);

    $('#right-arrow').click(function(event) {
        event.preventDefault();

        currentImg++;
        if(currentImg > 2){
            currentImg = 0;
        }

        changeImage(currentImg);
    })

    $('#left-arrow').click(function(event) {
        event.preventDefault();

        currentImg--;
        if(currentImg < 0){
            currentImg = 2;
        }
        
        changeImage(currentImg);
    })
})