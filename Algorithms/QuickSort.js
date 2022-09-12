// let arr = Array.from(
//   { length: 10 },
//   (val) => Math.floor(Math.random() * 10) + 2
// );

let numbers = [10, 16, 8, 12, 15, 6, 3, 9, 5];

function partition(left, right) {
  var pivot = numbers[Math.floor((right + left) / 2)],
    i = left,
    j = right;

  while (i <= j) {
    while (numbers[i] < pivot) {
      i++;
    }
    while (numbers[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(i, j);

      i++;
      j--;
    }
  }

  return i;
}

function swap(leftIndex, rightIndex) {
  var temp = numbers[leftIndex];
  numbers[leftIndex] = numbers[rightIndex];
  numbers[rightIndex] = temp;
}

function quickSort(left, right) {
  var index;

  index = partition(left, right);

  console.log(index, left, right, numbers);
  if (left < index - 1) {
    quickSort(left, index - 1);
  }
  if (index < right) {
    quickSort(index, right);
  }
}

quickSort(0, numbers.length - 1);

// let index = partition(0, numbers.length - 1);
// console.log(index);

// const quickSort = (l, h) => {
//   if (l < h) {
//     let j = partition(l, h);
//     quickSort(l, j);
//     quickSort(j + 1, h);
//   }
// };

// const partition = (l, h) => {
//   //   console.log(arr);
//   let pivot = arr[l];

//   let i = l;
//   let j = h;

//   while (i < j) {
//     do {
//       i++;
//     } while (arr[i] <= pivot);
//     do {
//       j--;
//     } while (arr[j] > pivot);

//     // swapping part
//     let tmp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = tmp;
//   }

//   // swapping part
//   let tmp = arr[j];
//   arr[j] = arr[l];
//   arr[l] = tmp;
//   console.log(arr[j]);
//   return j;
// };
