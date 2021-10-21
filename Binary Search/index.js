/*Binary Search: Search a sorted array by repeatedly dividing the search interval in half. 
Begin with an interval covering the whole array. 
If the value of the search key is less than the item in the middle of the interval, 
narrow the interval to the lower half. 
Otherwise, narrow it to the upper half.
Repeatedly check until the value is found or the interval is empty. */

//It returns location of x in given array arr[l..r] is present, otherwise -1
function binarySearch(arr, l, r, x) {
  if (r >= l) {
    // find the middle element in the array
    let mid = l + Math.floor((r - l) / 2);

    // If the element is present at the middle, return the middle index
    if (arr[mid] == x) return mid;

    // If element is smaller than mid, then it can only be present in left subarray
    // r is then replaced by the middle element
    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);

    // Else the element can only be present in right subarray
    // l is replaced by the middle element
    return binarySearch(arr, mid + 1, r, x);
  }

  return -1;
}

//sample array and elements
let arr = [2, 3, 4, 10, 40]; // annother eay to declare arrray --> arr = new Array(2, 3, 4, 10, 40);
let x = 10;
let n = arr.length;

//pass in the array,
//0 to signify the first index element,
//n - 1 to signfy last element in array, and the searched element (x)
let result = binarySearch(arr, 0, n - 1, x);
result == -1
  ? document.write('Element is not present in array')
  : document.write('Element is present at index ' + result);

console.log(result);

//Binary Search take O(Log n) time
