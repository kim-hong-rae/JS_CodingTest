function countUniqueValues(arr) {
  let count = {};
  let result = 0;
  for (let val of arr) {
    count[val] = (count[val] || 0) + 1;
  }
  for (let key in count) {
    result++;
  }
  return result;
}
