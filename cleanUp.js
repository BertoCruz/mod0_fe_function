// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit

console.log("this will be the best year ever");

// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();


// EX 2:
function addThreeNums(first, second, third) {
  //added tab spacing for block of code indication.
  //added the semicolon.
  var sum = first + second + third;
  console.log(sum);
  //backspaced the second curly brace
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:
//speclled out function
//before it just spelled out func
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
//returned the semicolon for readibility
//also to indicate where the block of code ends.
}

makeFreshPesto();


//  EX 4:

//backspaced the first curly brace into
function average(num1, num2) {
  //tabbed
  var sum = num1 + num2;
  //backspaced the var avg.
  var avg = sum / 2;

  //brought the "." into the string literal and added the semicolon.
  console.log(`the average is: ${avg}.`);
//backspaced the curly brace
}

//invoked the average function.
average(5, 20);
