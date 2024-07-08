function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let firstIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[firstIndex] > arr[j]) {
        firstIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[firstIndex];
    arr[j] = temp;
  }
  return arr;
}
