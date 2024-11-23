function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function divisibles(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 === 0) {
      sum += array[i];
    }
  }
  return sum;
}

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function runCalculations() {
  let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original array:", unsortedArray);

  let sortedArray = sortArray(unsortedArray);
  console.log("Sorted array:", sortedArray);

  let sum = divisibles(unsortedArray);
  console.log("Sum of numbers divisible by 5:", sum);

  console.log("Printing array elements:");
  printArray(sortedArray);
}
