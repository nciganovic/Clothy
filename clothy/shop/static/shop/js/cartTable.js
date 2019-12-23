$(document).ready(function() {
    
    var getProductList = localStorage.getItem('productList');
    var listOfAddedProducts = JSON.parse(getProductList);

    //populate table with values
    for(l of listOfAddedProducts){  
        $('table').append(`<tr>
                           <td>x</td>
                           <td>${l.name}-${l.size}</td>
                           <td>${l.price}</td>
                           <td><input type="number" class="amountInCart" value="${l.amount}" min="1" max="20"></td>
                           <td>${l.price * l.amount}</td></tr>`);
    }

    
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

        var y = localStorage.getItem('productList');
        var z = JSON.parse(y);
        console.log(z);
    })
})