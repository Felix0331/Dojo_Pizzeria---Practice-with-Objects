// Object Practice

function pizzaOven(crust,sauce,cheese,toppings){
    var pizza={};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
console.log(pizzaOven("normal","red","white","sausage"));
console.log(pizzaOven("Deep Dish","Alfredo","Fetta","Pepperoni"));
console.log(pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]));
console.log(pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]));

//BONUS CODE:

function randomPizza(){
    var crust=["thin", "deep dish", "coliflower", "regular"];
    var sauce = ["Marinera", "White", "none", "mayo"];
    var cheese = ["mozzerella", "cheddar", "Feta", "American"];
    var topping = ["olives", "mushrooms", "green peppers", "sardines", "Pepperoni", "pineapple","ham"]
    var pizza={};
    console.log("My Random Pizza has:")
    console.log(pizza.crust = crust[Math.floor(Math.random()* crust.length)]);
    console.log(pizza.sauce = sauce[Math.floor(Math.random()* sauce.length)]);
    console.log(pizza.cheese = cheese[Math.floor(Math.random()* cheese.length)]);
    console.log(pizza.topping = topping[Math.floor(Math.random()* topping.length)]);
}
randomPizza();