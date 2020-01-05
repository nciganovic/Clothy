$(document).ready(function() {
    
    var getProductList = localStorage.getItem('productList');
    var listOfAddedProducts = JSON.parse(getProductList);

    //populate table with values
    for(l of listOfAddedProducts){
        var price = Number(l.price);
        var amount = Number(l.amount);
        var total = price * amount;
        var totalFixed = total.toFixed(2);
        $('table').append(`<tr>
                           <td><a class="cancelProduct text-dark font-small-xs" href="">x</a></td>
                           <td class="font-small-xs">${l.name}-${l.size}</td>
                           <td class="font-small-xs">${price.toFixed(2)}</td>
                           <td class="font-small-xs"><input type="number" class="amountInCart" value="${amount}" min="1" max="20"></td>
                           <td class="font-small-xs">${totalFixed}</td></tr>`);
    }
    

    //Update navbar and sutotal id
    function UpdateCartNavbarAndSubtotal(){
        var getListOfProducts = localStorage.getItem('productList');
        if(getListOfProducts != null){
            listOfAddedProducts = JSON.parse(getListOfProducts);
            var totalPrice = 0;
            for(l of listOfAddedProducts){
                totalPrice +=  Number(l.price) * Number(l.amount);
            }
            var twoDecPrice = totalPrice.toFixed(2);
            $('.totalPriceInCart').text(twoDecPrice);
            $('#subtotal').text(twoDecPrice);
            $('#total').text(Number(twoDecPrice) + Number(shippingFee));
        }
    }

    //Shipping calculation
    var shippingFee = 0;
    var isChecked = false;
    $('.sp').click(function () {
        if($(this).val() == 0){
            shippingFee = 5;
            isChecked = true;
            UpdateCartNavbarAndSubtotal();
            localStorage.setItem('shipping', 0); 
        }        
        else{
            shippingFee = 10;
            isChecked = true;
            UpdateCartNavbarAndSubtotal();
            localStorage.setItem('shipping', 1);
        }
        console.log(localStorage.getItem('shipping'));
    })

    UpdateCartNavbarAndSubtotal();


    //change price based on quantity of products
    $('.amountInCart').change(function() {
        //Update total price
        var basePrice = $(this).parent().prev().text();
        var amount = $(this).val();
        var currentPrice = Number(basePrice) * Number(amount);
        var currentPrice2Dec = currentPrice.toFixed(2);
        $(this).parent().next().text(currentPrice2Dec);
    
        //Update listOfAddedProduct[]
        var getSecondCol = $(this).parent().prev().prev().text();
        var x =  getSecondCol.split('-');
        var nameOfThisProduct = x[0];
        var sizeOfThisProduct = x[1];
        console.log(sizeOfThisProduct);
        for(l of listOfAddedProducts){
            if(l.name == nameOfThisProduct && l.size == sizeOfThisProduct){
                l.amount = Number(amount);
                localStorage.setItem('productList', JSON.stringify(listOfAddedProducts))
            }
        }

        UpdateCartNavbarAndSubtotal()

        var y = localStorage.getItem('productList');
        var z = JSON.parse(y);
        console.log(z);
    })

    //Delete product from list
    $('.cancelProduct').click(function(e) {
        e.preventDefault();
        var product =  $(this).parent().next().text();
        product = product.split('-');
        
        var productName = product[0];
        var productSize = product[1];
        
        var elementCounter = 0; 
        for(l of listOfAddedProducts){
            if(l.name == productName && l.size == productSize){
                listOfAddedProducts.splice(elementCounter, 1);
                localStorage.setItem('productList', JSON.stringify(listOfAddedProducts))
           
                $(this).parent().parent().hide();

                var y = localStorage.getItem('productList');
                var z = JSON.parse(y);
                console.log(z);
            }
            elementCounter++;
        }

        UpdateCartNavbarAndSubtotal()

    })

    $('#cartChekoutBtn').click(function(){
        var y = localStorage.getItem('productList');
        var z = JSON.parse(y);
        if(z.length == 0){
            $('#cartMsg').text('Your cart is empty, go to store and select product you want to buy.');
        }
        if(!isChecked){
            $('#cartMsg').append('Please select shipping type.');
        }
        if(z.length == 0 || !isChecked){
            return false;
        }
        $('#cartMsg').text('');
        return true;
    })

})