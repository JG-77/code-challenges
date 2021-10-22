//Given a sorted array, and an element x to be searched, find position of x in the array
//time complexity: O(Log n)

/* Exponential search involves two steps:  
    1. Find range where element is present
    2. Do Binary Search in above found range.
 */

//A recursive binary search function
//It returns location of x in given array arr[l..r] is present, otherwise - 1
function binarySearch(arr, l, r, x) {
  // if the right subarray is >= than the left subarray...
  if (r >= l) {
    let mid = l + (r - l) / 2; // middle element

    // If the element is present at the middle itself
    if (arr[mid] == x) return mid;

    // If element is smaller than mid, then it can only be present n left subarray
    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);

    // Else the element can only be present in right subarray
    return binarySearch(arr, mid + 1, r, x);
  }
  // We reach here when element is not present in array
  return -1;
}

// Returns position of first occurrence of x in array
function exponentialSearch(arr, n, x) {
  // If x is present at first location itself
  if (arr[0] == x) return 0;

  // Find range for binary search by repeated doubling
  let i = 1;
  while (i < n && arr[i] <= x) i = i * 2;

  // Call binary search for the found range.
  return binarySearch(arr, i / 2, Math.min(i, n - 1), x);
}

// Driver Code
let arr = [2, 3, 4, 10, 40];
let n = arr.length;
let x = 10;
let result = exponentialSearch(arr, n, x);
if (result == -1) document.write('Element is not present in array');
else document.write('Element is present at index ' + result);
