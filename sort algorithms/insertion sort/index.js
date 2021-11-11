//The array is virtually split into a sorted and an unsorted part.
//Values from the unsorted part are picked and placed at the correct position in the sorted part

// Algorithm
// To sort an array of size n in ascending order:
// 1: Iterate from arr[1] to arr[n] over the array.
// 2: Compare the current element (key) to its predecessor.
// 3: If the key element is smaller than its predecessor,
//compare it to the elements before.
//Move the greater elements one position up to make space for the swapped element.

// Function to sort an array using insertion sort
function insertionSort(arr, n) {
  let i, key, j;
  //loop
  for (i = 1; i < n; i++) {
    key = arr[i]; // Choosing the first element in our unsorted subarray
    j = i - 1; // The last element of our sorted subarray

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && arr[j] > key) {
      //give the next postion the value of previous position
      arr[j + 1] = arr[j];
      //give the previous position the value of postion before that one, and so on
      //basically, move each position up one
      j = j - 1;
    }
    //
    arr[j + 1] = key;
  }
}
//Time Complexity: O(n^2)

// A utility function to print an array of size n
function printArray(arr, n) {
  let i;
  for (i = 0; i < n; i++) document.write(arr[i] + ' ');
  document.write('<br>');
}

// Driver code
let arr = [12, 11, 13, 5, 6];
let n = arr.length;

insertionSort(arr, n);
printArray(arr, n);
