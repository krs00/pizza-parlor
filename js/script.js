// BUSINESS LOGIC
 
// CREATE CLASS FOR PIZZA
class Pizza {
    constructor(name, size, sauce, meat, toppings) {
        this.name = name;
        this.size = size;
        this.sauce = sauce;
        this.meat = meat;
        this.toppings = toppings.map((topping) => {
            return topping.price
          }); 
    };

    /* Function will get Total Cost of your pizza by accessing
       each object "price" property and adding them together */
    getTotalCost = function() { 
        // LOOP THROUGH ARRAY OF TOPPINGS PRICE AND SUM PRICE
        let sum = 0;
        for(let i = 0; i < this.toppings.length; i++) {
          if(typeof this.toppings[i] === 'number') {
            sum += this.toppings[i];
          }
        }
        // ADD PRICE OF SAUCE, SIZE, AND MEAT TO SUMMED ARRAY OF TOPPING PRICE
        return this.size.price + this.sauce.price + this.meat.price + sum
      }
}; 

// This function corrects the capitalization of inputted name!
function capitalizeName(name) {
    // Lowercase entire name first
    let nameLower = name.toLowerCase() 
    // Capitalize the first letter and return the result
    return nameLower.charAt(0).toUpperCase() + nameLower.slice(1);
  } 


// UI LOGIC

// Get form Element
const pizzaForm = document.getElementById('pizza-form')

function handleSubmit(e) { 
// STOP PAGE REFRESH
e.preventDefault();
// Get INPUT VALUES FROM FORM
// GETS NAME FOR PIZZA ORDER
const name = document.getElementById("name").value;
// GET SIZE OF PIZZA
const size = JSON.parse(document.querySelector('input[name="pizza-size"]:checked').value);
// GET SAUCE TYPE OF PIZZA
const sauce = JSON.parse(document.querySelector('input[name="pizza-sauce"]:checked').value);
// GET MEAT TYPE OF PIZZA
const meat = JSON.parse(document.getElementById("pizzameat").value);

// GET TOPPING SELECTIONS FROM CHECKBOXES
// Loop through all checkboxes and push checked into array
    const toppings = []
    const checkboxes = document.getElementsByName('pizza-topping');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        toppings.push(JSON.parse(checkboxes[i].value))
      }
    }


// Create new pizza object using form inputs
const pizza = new Pizza(name, size, sauce, meat, toppings)

// Select out put node
const output = document.getElementById("output-text")
// NODE OF TEXT TO MSG
output.innerText = `${capitalizeName(name)}, the pizza you ordered cost $${pizza.getTotalCost()}`
// Resets form on submit :/ 
pizzaForm.reset() 



}



pizzaForm.addEventListener('submit', handleSubmit)
