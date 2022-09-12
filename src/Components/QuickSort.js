import React, { useEffect, useState } from "react";

export default function QuickSort({ length }) {
  const [numbers, setNumbers] = useState([]);

  const [activeNumbers, setActiveNumbers] = useState([]);
  const [ColorChange, setColorChange] = useState();

  useEffect(() => {
    resetArray();
  }, [length]);

  useEffect(() => {
    if (activeNumbers.length > length) {
      setActiveNumbers([]);
    }
  }, [activeNumbers]);

  const resetArray = () => {
    const tmp = [];

    for (var i = 0; i < length; i++) {
      tmp.push(Math.floor(Math.random() * 50) + 5);
    }

    setNumbers(tmp);
  };

  const changeBarColor = () => {
    setColorChange(
      setInterval(() => {
        setActiveNumbers((prev) => [...prev, prev.length]);
      }, 100)
    );
  };

  const swap = (i, j, tmpArr) => {
    let tmp = tmpArr[i];
    tmpArr[i] = tmpArr[j];
    tmpArr[j] = tmp;

    setNumbers(tmpArr);
  };

  function partition(left, right, tmpArr) {
    var pivot = tmpArr[Math.floor((right + left) / 2)],
      i = left,
      j = right;

    while (i <= j) {
      while (tmpArr[i] < pivot) {
        i++;
      }
      while (tmpArr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(i, j, tmpArr);

        i++;
        j--;
      }
    }

    // console.log(numbers);

    return i;
  }

  function quickSort(left, right, tmpArr) {
    var index;

    index = partition(left, right, tmpArr);

    if (left < index - 1) {
      quickSort(left, index - 1, tmpArr);
    }
    if (index < right) {
      quickSort(index, right, tmpArr);
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          let tmpArr = [];
          for (let number of numbers) {
            tmpArr.push(number);
          }
          // changeBarColor();
          quickSort(0, numbers.length - 1, tmpArr);
        }}
      >
        click me
      </button>
      <button
        onClick={() => {
          clearInterval(ColorChange);
        }}
      >
        Stop colour changing
      </button>
      <div className="allBars">
        {numbers.map((val, index) => (
          <div
            style={{ height: `${val * 5}px` }}
            // className="bar"
            className={`bar ${index in activeNumbers ? "active" : ""}`}
            key={Math.random()}
          ></div>
        ))}
      </div>
    </div>
  );
}
