$(document).ready(function() {

    listOfAddedProducts = [];
    //localStorage.removeItem('productList');
    
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
            }
            
        }
    })
})