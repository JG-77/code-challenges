// function that passes through the string --> user input
//we will test the word 'dad'
function isPalindrome(str) {
  //variable for the input (str) length
  strL = str.length;

  //create a for loop that splits string into 2
  for (let i = 0; i < strL / 2; i++) {
    //// As long as the characters from each part match, the FOR loop will go on
    if (str[i] === str[strL - 1 - i]) {
      //the first character (d) is commpared with the last character (d)
      //if(str[0] !== str[3 - 1 - 0])? => if("d"  !==  "d")? --> return false if not true

      //the second character (a) is compared with the second character from the end on the string (a)
      //if(str[0] !== str[3 - 1 - 1])? => if("a"  !==  "a")? --> return false if not true

      //if(str[0] !== str[3 - 1 - 2])? => if("d"  !==  "d")? --> return false if not true
      return 'is palindrome';
    } else {
      // When the characters don't match anymore, return 'not palidrome'
      return 'not palindrome';
    }
  }
}
const string = prompt('Enter a string:  ');
const value = isPalindrome(string);
console.log(value);
