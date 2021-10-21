//array arr[] of size n and block (to be jumped) size m
//Then we search at the indexes arr[0], arr[m], arr[2m]…..arr[km] and so on
// Once we find the interval (arr[km] < x < arr[(k+1)m]),
//we perform a linear search operation from the index km to find the element x

//in other words: we jumped around the array, take a step back once we pass the value
//we are looking for, and do a linear search

//the best step size is m = √n --> n = the size of the array, m = how many blocks we jump

function jumpSearch(arr, x, n) {
  // Finding block size to be jumped (square root of n)
  let step = Math.sqrt(n);

  // Finding the block where element is present (if it is present)
  let prev = 0;
  // while we do not pass the block containing x...
  while (arr[Math.min(step, n) - 1] < x) {
    //as long as we havent found the block, move on to the next and check again
    prev = step;
    step += Math.sqrt(n); //keep jumping the "step" # of spaces
    //if the next block is passed the length of array, target doesnt exist
    if (prev >= n) return -1;
  }

  // Doing a linear search for x in block beginning with prev
  while (arr[prev] < x) {
    prev++;

    // If we reached next block or end of array, element is not present.
    if (prev == Math.min(step, n)) return -1;
  }
  // If element is found
  if (arr[prev] == x) return prev;

  return -1;
}

// Driver program to test function
let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
let x = 55;
let n = arr.length;

// Find the index of 'x' using Jump Search
let index = jumpSearch(arr, x, n);

// Print the index where 'x' is located
document.write(`Number ${x} is at index ${index}`);
