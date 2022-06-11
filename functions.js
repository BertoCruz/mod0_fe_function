// 1: Write a function named printGreeting that prints a simple greeting
//message, the same one, every time it is called. Call this function 3 times.
function printGreeting(){
  console.log("Greeting Amy and Kaitlyn :)");
}

printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a
//sentence that interpolates the data passed in.
function myColor(color) {
  console.log(`My favorite, favorite, favorite, absolute favorite, color is ${color}.`);
}

myColor("Silver");

// 3: Write a function that has 3 parameters: a string and two numbers.
//The String will be the name of a company, and the numbers will represent
//the minimum and maximum of a pay range for a posted job. The function
//should print out a sentence that includes the name of the company and the
//range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function newJobListing(name, min, max) {
  console.log(`Working at ${name} sounds so promising, I hear the pay ranges $${min + max}.00 !`);
}

newJobListing("Arrow Electronics", 60000, 200000);

// 4: Write a function that satifies the following interaction pattern:

function checkStock(inventory, product) {
  if (inventory === 0){
    console.log(`${product} - OUT of stock!`);
  } else if (inventory > 0 && inventory < 4) {
    console.log(`${product} - running LOW`);
  } else if (inventory >= 4) {
    console.log(`${product} is stocked`);
  }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
