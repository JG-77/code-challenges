// The selection sort algorithm sorts an array by repeatedly finding
// the minimum element (considering ascending order) from unsorted part and
// putting it at the beginning.
// The algorithm maintains two subarrays in a given array

//The algorithm maintains two subarrays in a given array:
// 1) The subarray which is already sorted
// 2) Remaining subarray which is unsorted

//EXAMPLE:
// arr[] = 64 25 12 22 11

// Find the minimum element in arr[0...4] and place it at beginning
// 11 25 12 22 64

// Find the minimum element in arr[1...4] and place it at beginning of arr[1...4]
// 11 12 25 22 64

// Find the minimum element in arr[2...4] and place it at beginning of arr[2...4]
// 11 12 22 25 64

// Find the minimum element in arr[3...4] and place it at beginning of arr[3...4]
// 11 12 22 25 64

function selectionSort(arr, n) {
  var i, j, min_idx;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    //comparing i against its neighbor i + 1 in the array
    for (j = i + 1; j < n; j++)
      //if the next value (i + 1) is the smallest, then make the min_idx now equal j
      if (arr[j] < arr[min_idx]) min_idx = j;

    // Swap the found minimum element with the first element
    swap(arr, min_idx, i); // pass in the array, minimum index, and the index number
    console.log(min_idx, i); // look in console to better understand
  }
}

//function to swap index with the smallest value
function swap(arr, xp, yp) {
  // arr = [64, 25, 12, 22, 11];
  //arr[xp] = 11 (in first iteration), arr[yp] = 64 (in first iteration)
  var temp = arr[xp]; // temp serves as a place holder variable to hold xp value
  arr[xp] = arr[yp]; //xp is the min_idx, its now assigned the index number
  arr[yp] = temp; // and yp is now assigned the min_idx value, thus a swap
}
// Explained: in the first iteration of the array below, 11 is the smallest value with index # of 4
//so, arr[4] now equals 64
//and arr[0] now equals 11, they swapped positions in the array, this repeats until sorted

//function to print out array that's been sorted (unnecessary step)
function printArray(arr, size) {
  var i;
  for (i = 0; i < size; i++) document.write(arr[i] + ' ');
  document.write(' <br>');
}

//driver code
var arr = [64, 25, 12, 22, 11];
var n = 5;

selectionSort(arr, n);
document.write('Sorted array: <br>');
printArray(arr, n);
