function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}




crust_options = [
    "integral", "hand-made", "classic", "gluten-free"
]
sauce_options = [
    "basilic", "garlic", "marinara", "raditionale"
]
cheese_options = [
    "mozzarela", "guda", "parmiggiano", "feta"
]

toppings_options = [
    ["onion", "bacon", "olive", "oregano"],
    ["mushrooms", "sausage"],
    ["olive", "olive oil"],
    ["garlic", "cream"]
]

function randomPizza(crust, sauce, cheese, toppings) {
    let random = Math.floor((Math.random() * 10) + 1);
    while (random > 3) {
        random = Math.floor((Math.random() * 10) + 1);
    }
    let pizza = {}
    pizza.crust = crust_options[random]
    pizza.sauce = sauce_options[random];
    pizza.cheese = cheese_options[random];
    pizza.toppings = toppings_options[random];
    return pizza;
}

console.log(randomPizza())


var p1 = pizzaOven("deep dish", "traditionale", ["mozzarella"], ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olive", "onions"]);
var costum1 = pizzaOven("hand tossed", "marinara", ["feta"], ["mushrooms", "olive", "onions"]);
var costum2 = pizzaOven("integral", "none", ["none"], ["olive", "oregano", "olive oil"]);
console.log(p1);
console.log(p2);
console.log(costum1);
console.log(costum2);