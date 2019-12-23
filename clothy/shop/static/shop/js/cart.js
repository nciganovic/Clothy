$(document).ready(function() {

    listOfAddedProducts = [];
    //localStorage.removeItem('productList');
    
    function UpdateCartInNavbar(){
        var getListOfProducts = localStorage.getItem('productList');
        if(getListOfProducts != null){
            listOfAddedProducts = JSON.parse(getListOfProducts);
            var totalPrice = 0;
            for(l of listOfAddedProducts){
                totalPrice +=  Number(l.price);
            }
            var twoDecPrice = totalPrice.toFixed(2);
            $('.totalPriceInCart').text(twoDecPrice);
        }
    }

    $('#btnAddToCart').click(function() {
        if($('#size option:selected').val() == 0){
            alert('Please select size of product.');
        }
        else{
            productInfo = {
                name: $('#prodName').text(),
                price: $('#prodPrice').text(),
                size: $('#size option:selected').text(),
                amount: 1
            }

            var isAlreadyAdded = false;

            for(i of listOfAddedProducts){
                if(i.name == productInfo.name && i.size == productInfo.size){
                    isAlreadyAdded = true;        
                }
            } 
            if(!isAlreadyAdded){
                var lsProductList = localStorage.getItem('productList');
                if(lsProductList == null){
                    listOfAddedProducts.push(productInfo);
                    localStorage.setItem('productList', JSON.stringify(listOfAddedProducts));
                
                    var x = localStorage.getItem('productList')
                    console.log(x);
                    console.log(JSON.parse(x));
                    console.log('------------------');
                }
                else{
                    var getListOfProducts = localStorage.getItem('productList');
                    listOfAddedProducts = JSON.parse(getListOfProducts);
                    listOfAddedProducts.push(productInfo);
                    localStorage.setItem('productList', JSON.stringify(listOfAddedProducts));
                
                    var x = localStorage.getItem('productList')
                    console.log(x);
                    console.log(JSON.parse(x));
                    console.log('------------------');
                }

                //Add price to cart in navbar
                UpdateCartInNavbar();
            }
            
        }
    })
    //Set cart on load 
    UpdateCartInNavbar();
})