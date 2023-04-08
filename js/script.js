// BUSINESS LOGIC

// CREATE CLASS FOR PIZZA
class Pizza {
    constructor(name, size, sauce, meat, toppings) {
        this.name = name;
        this.size = size;
        this.sauce = sauce;
        this.meat = meat;
        this.toppings = toppings;
    }
 
       getName = function(){
        return this.name;
       };
};


function createPizza() {
    // GETS NAME FOR PIZZA ORDER
    const name = document.getElementById("name").value
    // GET SIZE OF PIZZA
    const size = document.querySelector('input[name="pizza-size"]:checked').value;
    // GET SAUCE TYPE OF PIZZA
    const sauce = document.querySelector('input[name="pizza-sauce"]:checked').value;
    // GET MEAT TYPE OF PIZZA
    const meat = document.getElementById("pizzameat").value

    // GET TOPPING SELECTIONS FROM CHECKBOXES
    // Loop through all checkboxes and push checked into array
    const toppings = []
    const checkboxes = document.getElementsByName('pizza-topping');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        toppings.push(checkboxes[i].value);
      }
    }
    
    const myPizza = new Pizza(name, size, sauce, meat, toppings)

};