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

    //Change shipping fee and update total price
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

    //calculate total price on load
    var totalPrice = sum + shippingFee;
    var totalPriceDec = totalPrice.toFixed(2);
    $('#total').text(totalPriceDec);

    function addHiddenFormElements(){
        var form = document.getElementById('payment-form');

        var hiddenProductList = document.createElement('input');
        hiddenProductList.setAttribute('type', 'hidden');
        hiddenProductList.setAttribute('name', 'productList');
        hiddenProductList.setAttribute('value', getProductList);
        form.appendChild(hiddenProductList);

        var hiddenShippingType = document.createElement('input');
        hiddenShippingType.setAttribute('type', 'hidden');
        hiddenShippingType.setAttribute('name', 'shippingType');
        if($('#sp0').prop('checked')){
            hiddenShippingType.setAttribute('value', 'Shipping type 1');
        }
        else{
            hiddenShippingType.setAttribute('value', 'Shipping type 2');
        }
        form.appendChild(hiddenShippingType);
    }

    //check if form is valid on click
    var totalErrors = [];
    $('#submit-payment').click(function () {
        addHiddenFormElements();

        totalErrors = [];

        //First name test
        var isFirstNameValid = false; 
        var regExName = /^[A-z]{2,15}(\s[A-z]{2,15})?$/
        isFirstNameValid = regExName.test($('#fn').val())
        if(!isFirstNameValid){
            console.log('fn error')
            totalErrors.push('First name');
            $("html, body").animate({ scrollTop: 0 }, 500);
        }

        //Last name test
        var isLastNameValid = false; 
        var regExName = /^[A-z]{2,15}(\s[A-z]{2,15})?$/
        isLastNameValid = regExName.test($('#ln').val())
        if(!isLastNameValid){
            console.log('ln error')
            totalErrors.push('Last name');
            $("html, body").animate({ scrollTop: 0 }, 500);
        }

        //Company name test
        var isCompanyNameValid = false; 
        if($('#cn').val().length > 50){
            isCompanyNameValid = false;
            totalErrors.push('Company name');
        }
        else{
            isCompanyNameValid = true;
        }

        //Select country test
        var isCountryValid = false; 
        if($('#countries option:selected').val() == 0){
            isCountryValid = false;
            totalErrors.push('Select country');
        }
        else{
            isCountryValid = true;
        }

        //Street address
        var isStreetAddressValid = false;
        var rgxStreetAddress = /[A-z0-9\.\-\s]/
        isStreetAddressValid = rgxStreetAddress.test($('#st').val())
        if(!isStreetAddressValid){
            console.log('st error')
            totalErrors.push('Street address');
            $("html, body").animate({ scrollTop: 0 }, 500);
        }

        //Apartment name test
        var isApartmentNameValid = false; 
        if($('#an').val().length > 50){
            isApartmentNameValid = false;
            totalErrors.push('Apartment name');
        }
        else{
            isApartmentNameValid = true;
        }

        //Zip test
        var isZipValid = false;
        if(Number($('#zip').val()) >= 10000 && Number($('#zip').val()) < 100000){
            isZipValid = true;
        }
        else{
            isZipValid = false;
            totalErrors.push('Postalcode / ZIP');
        }

        //Town test
        var isTownValid = false;
        var rgxTown = /[A-z \/]{2,30}(\s[A-z \/]{2,30})*/
        isTownValid = rgxTown.test($('#tw').val())
        if(!isTownValid){
            console.log('tw error')
            totalErrors.push('Town / City');
            $("html, body").animate({ scrollTop: 0 }, 500);
        }

        //Phone test
        var isPhoneValid = false;
        var rgxPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
        isPhoneValid = rgxPhone.test($('#ph').val())
        if(!isPhoneValid){
            console.log('ph error')
            totalErrors.push('Phone');
            $("html, body").animate({ scrollTop: 0 }, 500);
        }

        //Email test
        var isEmailValid = false;
        var rgxEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        isEmailValid = rgxEmail.test($('#em').val())
        if(!isEmailValid){
            console.log('em error')
            totalErrors.push('Email');
            $("html, body").animate({ scrollTop: 0 }, 500);
        }

        //Order notes test
        var isNotesValid = false;
        if($('#on').val().length > 300){
            isNotesValid = false;
            console.log('on error')
            totalErrors.push('Order notes');
            $("html, body").animate({ scrollTop: 0 }, 500);
        }
        else{
            isNotesValid = true;
        }

        if(!isFirstNameValid || !isLastNameValid || !isCompanyNameValid || !isCountryValid || !isStreetAddressValid){
            return false;
        }
        if(!isApartmentNameValid || !isZipValid || !isTownValid || !isNotesValid || !isPhoneValid || !isEmailValid){
            return false;
        }
        
        return true;
    })

    $('#submit-payment').click(function () {
        console.log(totalErrors);
        $('#form-errors').html('');
        for(t of totalErrors){
            $('#form-errors').append(`<p class="text-red">${t} is not valid field.</p>`);
        }
      
    })


})