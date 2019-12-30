$(document).ready(function () {
    var getProductList = localStorage.getItem('productList');
    var productList = JSON.parse(getProductList);
    for(p of productList){
        var total = p.price * p.amount;
        var totalDec = total.toFixed(2);
        $('#productList').append(`
                <div class="ml-3 mr-3 pt-2 pb-2 d-flex justify-content-between">
                    <div><p>${p.name}-${p.size} x ${p.amount}</p></div>
                    <div><p class="singleProductPrice">${totalDec}</p></div>
                </div>
        `)
    }

    //calculate subtotal
    var sum = 0;
    $('.singleProductPrice').each(function(index) {
        var price = $(this).text();
        sum += Number(price);
    })
    var sumDec = sum.toFixed(2);
    $('#subtotal').text(sumDec);

    var shippingFee = 0;
    //set shipping radio button on load 
    if(localStorage.getItem('shipping') == 0){
        $('#sp0').prop('checked', true);
        console.log('set 0');
        shippingFee = 5; 
    }
    else if(localStorage.getItem('shipping') == 1){
        $('#sp1').prop('checked', true);
        console.log('set 1');
        shippingFee = 10;
    }

    $('.sp').click(function () {
        if($(this).val() == 0){
            shippingFee = 5; 
            var totalPrice = sum + shippingFee;
            var totalPriceDec = totalPrice.toFixed(2);
            $('#total').text(totalPriceDec);
        }        
        else{
            shippingFee = 10;
            var totalPrice = sum + shippingFee;
            var totalPriceDec = totalPrice.toFixed(2);
            $('#total').text(totalPriceDec);
        }
    })

    
    var totalPrice = sum + shippingFee;
    var totalPriceDec = totalPrice.toFixed(2);
    $('#total').text(totalPriceDec);
})