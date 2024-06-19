// 문제
// 빈도수 세기- validAnagram
// 두 개의 문자열이 주어졌을 때, 두 번째 문자열이 첫 번째 문자열의 애너그램인지 확인하는 함수를 작성합니다. 애너그램은 다른 글자의 글자를 재배열하여 형성된 단어, 구 또는 이름입니다. (예시: cinema -> iceman)

function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let split_arr1 = arr1.split("");
  let split_arr2 = arr2.split("");
  let freq1 = {};
  let freq2 = {};
  for (let val of split_arr1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }
  for (let val of split_arr2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }
  for (let key in freq1) {
    if (!(key in freq2)) {
      return false;
    }
    if (!(freq1[key] === freq2[key])) {
      return false;
    }
  }
  return true;
}
