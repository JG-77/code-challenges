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
  for (i = 0; i < n; i++) {
    if (arr[i] == x) return i; //be careful how this for loop is structured, couple misread loop
  }
  return -1;
}

//sample array and element
let arr = [2, 3, 4, 10, 40];
let x = 4;
let n = arr.length;

//call the function
let result = searchArr(arr, n, x);

//if result == -1, then display first message, if not, display result
result == -1
  ? document.write('Element is not present in array')
  : document.write('Element is present at index ' + result);

console.log(result);

//---------------------------------------------------
//Improve Linear Search Worst-Case Complexity
/*if element Found at last  O(n) to O(1)
It is the same as previous method because here we are performing 2 ‘if’ operations 
in one iteration of the loop and in previous method we performed only 1 ‘if’ operation. 
This makes both the time complexities same. */

//function searched from BOTH left and right
function search(arra, search_Element) {
  //left is starting from index[0]
  let left = 0;
  let length = arra.length;
  //right starts from the last index number
  let right = length - 1;
  let position = -1;

  // Run loop from 0 to right
  for (left = 0; left <= right; ) {
    // If search_element is found with left variable then output left position
    if (arra[left] == search_Element) {
      position = left;
      document.write(
        '. Element found in Array at ' +
          (position + 1) + //increase by 1 to get position number, not index number
          ' Position with ' +
          (left + 1) +
          ' Attempt'
      );
      break;
    }

    // If search_element is found with right variable then output right position
    if (arra[right] == search_Element) {
      position = right;
      document.write(
        '. Element found in Array at ' +
          (position + 1) + //increase by 1 to get position number, not index number
          ' Position with ' +
          (length - right) +
          ' Attempt'
      );
      break;
    }
    left++;
    right--;
  }
  // If element not found
  if (position == -1)
    document.write('. Not found in Array with ' + left + ' Attempt');
}

// Driver code
let arra = [1, 2, 3, 4, 5];
let search_element = 4;
//output: Element found in Array at 4 Position with 2 Attempt
// 4 is found in the 4th postion (index 3), and it takes 2 elements for the right variable to identify the number

// Function call
search(arra, search_element);
