$(document).ready(function(){
    $('.view').css('opacity', '0');
    $('.size').css('opacity', '0');
    $('.img2').hide();

    $('.product-in-category').hover(function(){
        $(this).find('.view').stop(true,true).animate({'opacity':'1'}, 100);
        $(this).siblings().eq(1).stop(true,true).animate({'opacity':'1'}, 250);

        $(this).find('.img1').hide();
        $(this).find('.img2').show();
    },
    function(){
        $(this).find('.view').stop(true,true).animate({'opacity':'0'}, 100);
        $(this).siblings().eq(1).stop(true,true).animate({'opacity':'0'}, 250);
        
        $(this).find('.img1').show();
        $(this).find('.img2').hide();
    })

    $('.name-of-product').hover(function(){
        $(this).next().stop(true,true).animate({'opacity':'1'}, 250);
    },function(){
        $(this).next().stop(true,true).animate({'opacity':'0'}, 250);
    })
})