//Bubble Sort is the simplest sorting algorithm that works by
//repeatedly swapping the adjacent elements if they are in wrong order

// algorithm does not know if it is completed so the algorithm needs
//one whole pass without any swap to know it is sorted

function bubbleSort(arr, n) {
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
  for (i = 0; i < size; i++) document.write(arr[i] + ' ');
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
