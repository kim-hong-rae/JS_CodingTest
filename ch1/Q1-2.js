//문제
// Write a function called same, which accetps to arrays.
// the function should return true if every value in the array has it's corresponding value squared in the second array. the frequency of values must be the same

//문풀2

function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  let frequency1 = {};
  let frequency2 = {};

  for (let item of arr1) {
    frequency1[item] = (frequency1[item] || 0) + 1;
  }
  for (let item of arr2) {
    frequency2[item] = (frequency2[item] || 0) + 1;
  }

  for (let key in frequency1) {
    if (!(key ** 2 in frequency2)) {
      return false;
    }
    if (!(frequency1[key] === frequency2[key ** 2])) {
      return false;
    }
  }
  return true;
}
