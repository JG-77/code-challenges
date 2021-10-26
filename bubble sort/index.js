//Bubble Sort is the simplest sorting algorithm that works by
//repeatedly swapping the adjacent elements if they are in wrong order

// algorithm does not know if it is completed so the algorithm needs
//one whole pass without any swap to know it is sorted

//The elements will be swapped if needed, element by element
// so the array will continue to iterate until its in order
function bubbleSort(arr, n) {
  //runs O(n^2)
  var i, j;
  //loop thru the array
  for (i = 0; i < n - 1; i++) {
    //j will loop one index behind i
    for (j = 0; j < n - i - 1; j++) {
      //compare adjacent elements, if arr[j] > than the next value...
      if (arr[j] > arr[j + 1]) {
        //pass in the two values in swap function
        swap(arr, j, j + 1);
      }
    }
  }
}

//the elements passed in will swap places in the array by reassigning values
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

/* Function to print an array */
function printArray(arr, size) {
  var i;
  for (i = 0; i < size; i++) document.write(arr[i] + ', '); // prints array with commas & spacing
  document.write('\n');
}

// Driver program to test above functions
var arr = [64, 34, 25, 12, 22, 11, 90];
var n = 7;

document.write('UnSorted array: \n');
printArray(arr, n);

bubbleSort(arr, n);
//print out array now that it is sorted
document.write('Sorted array: \n');
printArray(arr, n);

//=======================================================
// Optimized javaScript implementation of Bubble sort
// stopping the algorithm if inner loop didn’t cause any swap
function bubbleSort(arr, n) {
  var i, j, temp;
  var swapped;
  //loop through array
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    //compare adjacent elements
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap arr[j] and arr[j+1]
        //in this function, the swap functionality is incorporated already
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // IF no two elements were swapped by inner loop, then break
    if (swapped == false) break;
  }
}

//Worst and Average Case Time Complexity: O(n*n). Worst case occurs when array is reverse sorted
//Best Case Time Complexity: O(n). Best case occurs when array is already sorted

//============================================
//recursive bubble sort
// Base Case: If array size is 1, return.
// Do One Pass of normal Bubble Sort. This pass fixes last element of current subarray.
// Recur for all elements except last of current subarray
function bubbleSort(arr, n) {
  // Base case
  if (n == 1) return;

  // One pass of bubble sort. After this pass, the largest element
  // is moved (or bubbled) to end.
  //here, the greatest element is compared in the array and swapped until it is at the end
  // in previous examples, only adjacent elements would be swapped per iteration
  for (var i = 0; i < n - 1; i++)
    if (arr[i] > arr[i + 1]) {
      // swap arr[i], arr[i+1]
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }

  // Largest element is fixed,
  // recur for remaining array
  bubbleSort(arr, n - 1);
}
