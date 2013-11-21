//Global variable Basket
var pizza = com.dawgpizza.menu.pizzas;
var basket = new Array();

// click to order function
$(function() {
    $(".order").click(function(event) {
        alert(event.target.id);
        var id = event.target.id.split("=");
        var item = id[0];
        var type = id[1];
        var p = makeBasketItem(item, type); 
        basket.push(p);  //
        $("#cart-container").append(name(p)); 
        $("#total-price").html(total());
    });    
});

function name(p) {
    return p.name + "            " + p.cost;
}

function total() {
    var total = 0;
    for(var idx = 0; idx < basket.length; ++idx){
        var current = basket[idx];
        total += current.cost;
    }
    total += total * .095;
    return total;
}

// Basket items
function makeBasketItem(item, type) {
    var label;
    for(var idx = 0; idx < pizza.length; ++idx){
        var current = pizza[idx];
        if (current.name == item){
            label = pizza[idx];
        }
    }

    var price;
    if(type == 's'){
        price = 0;
    }else if(type == 'm'){
        price = 1;
    }else{
        price = 2;
    }

    var obj = {
        name: label.name,
        cost: label.prices[price]
    }
    return obj;
}
