$(document).ready(function() {
    console.log('clearCookie.js');
    var emptyList = [];
    localStorage.setItem('productList', emptyList);
    var x = localStorage.getItem('productList')
    console.log(x)
})