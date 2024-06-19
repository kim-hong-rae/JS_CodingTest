//문제
// Write a function called same, which accetps to arrays.
// the function should return true if every value in the array has it's corresponding value squared in the second array. the frequency of values must be the same

//문풀1
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (corredIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
