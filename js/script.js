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

    getToppingsCost = function() {
        
        let sum = 0;
        for(let i = 0; i < this.toppings.length; i++) {
          if(typeof this.toppings[i] === 'number') {
            sum += this.toppings[i];
          }
        }
        return sum;
      }
     

};


function createPizza() {
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

    const myPizza = new Pizza(name, size, sauce, meat, toppings)


    const cost = myPizza.getToppingsCost();
    console.log(cost)


    return myPizza

};



function handleSubmit(e) { 
    // STOP PAGE REFRESH
    e.preventDefault();

    console.log(createPizza())

}


// UI LOGIC

// Get form Element
const pizzaForm = document.getElementById('pizza-form')

pizzaForm.addEventListener('submit', handleSubmit)
