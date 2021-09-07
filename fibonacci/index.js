//this first funtion creates an array with the fibonacci sequence [0, 1, 1, 2, 3, 5 ...]

// input a number through the prompt into the function
const num = parseInt(prompt('Enter a number '));

//input is passed through function
function fibonacci(num) {
  //first two numbers in sequence are 0 and 1
  var num1 = 0;
  var num2 = 1;
  var sum;
  var i = 0;
  //create an array variable
  var fibArray = [];

  //loop through each value less than the input
  for (i = 0; i <= num; i++) {
    //in the array we insert the values of the sequence up until the Nth value
    fibArray.push(num1);

    //the nth Fibonacci number is the summation of n-1 and n-2 term
    //the n-1 term is the summation of n-2 and n-3 term
    sum = num1 + num2;
    num1 = num2; //after getting the sum, num2 value goes to num1
    num2 = sum; //the sum value now becomes num2 and repeat until i = num
  }
  return fibArray;
}

console.log(fibonacci(num));
//------------------------------------------
const position = num;

//this second function gives the value in the Nth position of the sequence
const fibonacci2 = (position) => {
  // Since this implementation of the algorithm excludes searching for negative positions, we check if the value of `position` is less than two.
  // If the value of `position` is 1, return 1 because it's the value at that position of the sequence.
  // If the value of `position` is 0, return 0 because it's the value at that position of the sequence.
  if (position < 2) {
    return position;
  }

  // The current value at this position is evaluated by adding the sum of the values at the two preceding positions of the sequence
  // By calling itself, we form a loop.
  // With each subsequent call smaller arguments are used until the base condition is reached
  return fibonacci2(position - 1) + fibonacci2(position - 2);
};

// This will return the value of the Fibonacci sequence at the Nth position
console.log(fibonacci2(position));
