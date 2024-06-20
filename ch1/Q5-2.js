//문제
//write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n comsecutive elements in the array
function maxSubarraySum(arr, n) {
  if (arr.length < n) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}
