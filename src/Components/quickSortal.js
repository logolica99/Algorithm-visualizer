function partition(mainArr, low, high) {
    console.log(mainArr)
  let arr = mainArr;
  let temp;
  let pivot = arr[high];

  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i++;

      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}

function quickSortIterative(arr, l, h) {
  let stack = new Array(h - l + 1);
  stack.fill(0);

  let top = -1;

  stack[++top] = l;
  stack[++top] = h;

  while (top >= 0) {
    // console.log(arr)
    // Pop h and l
    h = stack[top--];
    l = stack[top--];

    let p = partition(arr, l, h);

    if (p - 1 > l) {
      stack[++top] = l;
      stack[++top] = p - 1;
    }

    if (p + 1 < h) {
      stack[++top] = p + 1;
      stack[++top] = h;
    }
  }
}

let arr = [10, 2, 423, 12];
let n = arr.length;

quickSortIterative(arr, 0, n - 1);

console.log(arr);
