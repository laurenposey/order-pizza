// ============ Backend Logic ============

var toppingPrices = { 'mushroom' : 1.0};

function Pizza (size) {
  this.pizzaSize = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.getPrice = function () {
  this.price = 0;

  if (this.pizzaSize === "small") {
    this.price += 12;
  } else if (this.pizzaSize === "medium") {
    this.price += 18;
  } else {
    this.price += 22;
  }

  for (var i = 0; i < this.toppings.length; i++) {
    var currentTopping = this.toppings[i];
    var toppingPrice = toppingPrices[currentTopping];
    this.price += toppingPrice;
  }

  return this.price;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
 }


// ============ Frontend Logic ============
$(function() {
  $('order-pizza').submit(function(e) {
    e.preventDefault();
    var size = $('#pizza-size').val();
    var pizza = new Pizza(size);
    $('input[name="topping"]:checked').each(function(){
      pizza.addTopping(this.value);
    });

    var pizzaPrice = pizza.getPrice();

    $('#output'.append('<p>' + pizza.pizzaSize + '</p>', '<li>' + pizza.toppings + '</li>', '<p>' + pizza.totalCost + '</p>');
    $('#output').show();
    $('#order-pizza').toggle();

  });

});
