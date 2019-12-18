
var fullStr =  $('#size').attr('data'); //['S', 'XL', 'XXL', 'M']
var strWithoutBrackets = fullStr.substring(1,fullStr.length-1); // 'S', 'XL', 'XXL', 'M'
strWithoutBrackets = strWithoutBrackets.replace(/\'/g,''); // S, XL, XXL, M
strWithoutBrackets = strWithoutBrackets.replace(/ /g, '');
arrayOfSizes = strWithoutBrackets.split(',');
arrayOfSizes.unshift('Choose size');

for(let i = 0; i < arrayOfSizes.length; i++){
    var newOption = `<option value="${i}">${arrayOfSizes[i]}</option>`;
    $('#size').append(newOption);
}

/* Hide and show text */
$('.shipping').hide();
$('.del-and-ret').click(function() {
    $('.shipping').slideToggle();
    $('.plus-sign').toggleClass('fa-plus');
    $('.plus-sign').toggleClass('fa-minus');
})