//Problem: Given an array arr[] of n elements, write a function to search a given element x in arr[]

//EXAMPLE:
// Input : arr[] = {10, 20, 80, 30, 60, 50, 110, 100, 130, 170}
// x = 110;
// Output : 6 --> Element x is present at index 6

/* - Start from the leftmost element of arr[] and one by one compare x with each element of arr[]
- If x matches with an element, return the index.
- If x doesn’t match with any of elements, return -1 */

//pass in the array, array length, and x
function searchArr(arr, n, x) {
  let i;
  //use for loop to iterate thru array
  //if array element equals x, return the index number
  for (i = 0; i < n; i++) if (arr[i] == x) return i;
  return -1;
}

//sample array and element
let arr = [2, 3, 4, 10, 40];
let x = 10;
let n = arr.length;

//call the function
let result = searchArr(arr, n, x);
result == -1
  ? document.write('Element is not present in array')
  : document.write('Element is present at index ' + result);

console.log(result);
