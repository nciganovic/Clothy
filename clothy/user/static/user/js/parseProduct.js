$(document).ready(function(){
    
    $('.product-details').each(function(idx) {
        var productInObject =  $(this).text();
        var getParsed = JSON.parse(productInObject);
        var date = $(this).next().text();
        var newDiv = document.createElement('div');
        newDiv.style['margin-top'] = '50px';
        newDiv.innerHTML = '';
        newDiv.innerHTML += `<h3 class="text-center">${date}</h3>`;
        for(x of getParsed){
            console.log(x);
            newDiv.innerHTML += `<p class="text-center">${x.name}-${x.size} ${x.price} x ${x.amount}</p>`;
        }
        document.getElementById('insertProducts').appendChild(newDiv);
    })
    
})