//문제
//write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n comsecutive elements in the array

function maxSubarraySum(arr, n) {
  if (arr.length < n) {
    return null;
  }
  let temp = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    max = 0;
    for (let j = i; j < i + n; j++) {
      max += arr[j];
    }
    if (max > temp) {
      temp = max;
    }
  }
  return temp;
}

console.log(maxSubarraySum([1, 2, 3, 4]), 2);
