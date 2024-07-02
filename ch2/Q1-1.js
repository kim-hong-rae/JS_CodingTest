// Binary Search 연습
// 정렬된 배열과 값을 받아들이고 값이 존재하는 경우 그 인덱스를 반환하는 binarySearch라는 함수를 작성합니다. 값이 존재하지 않으면 -1을 반환합니다.

// 이 알고리즘은 linearSearch 보다 더 효율적일 것입니다. 구현 방법은 여기에서 확인할 수 있습니다.

function binarySearch(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    if (n < arr[mid]) {
      mid = Math.floor((left + mid) / 2);
    }
    if (n > arr[mid]) {
      mid = Math.floor((right + mid) / 2);
    }
    if (n === arr[mid]) {
      return mid;
    }
  }
  return -1;
}
