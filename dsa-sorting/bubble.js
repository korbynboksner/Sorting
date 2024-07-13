function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 1; i < n; i++) {
        if (arr[i - 1] > arr[i]) {
          // Swap the elements
          let temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          swapped = true;
        }
      }
      n--; // Each pass through the array, the largest element is sorted to its final position
    } while (swapped);
    return arr;
  }
  
  module.exports = bubbleSort;