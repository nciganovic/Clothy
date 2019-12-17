$(document).ready(function() {
    /* Change featured image */
    var currentImg = 0;

    function changePic(currentImg){
        if(currentImg == 2){
            console.log('red');
        }
        else if(currentImg == 0){
            console.log('orange');
        }
        else if(currentImg == 1){
            console.log('gray');
        }
        var numberOfPhotos = $(".featured-item").length;
        $(".featured-item").eq(currentImg).fadeToggle(function(){
            $(".featured-item").each(function(i){
                $(this).css(
                    'zIndex', ((numberOfPhotos - i) + currentImg) % numberOfPhotos
                )
            })
            $(this).show();
        })
    }

    changePic(currentImg);

    $("#left-arrow").on('click', function(event){
        event.preventDefault();
        currentImg--;
        if(currentImg > 2){
            currentImg = 0;
        }
        if(currentImg < 0){
            currentImg = 2;
        }
        changePic(currentImg);
    })

    $("#right-arrow").on('click', function(event){
        event.preventDefault();
        currentImg++;
        if(currentImg > 2){
            currentImg = 0;
        }
        if(currentImg < 0){
            currentImg = 2;
        }
        
        changePic(currentImg);
    })
    
})