import React, { useEffect, useState } from "react";

export default function QuickSort({ length }) {
  const [numbers, setNumbers] = useState([]);

  const [swap1, setSwap1] = useState();
  const [swap2, setSwap2] = useState();
  const [acitve, setActive] = useState();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    resetArray();
  }, [length]);

  const resetArray = () => {
    const tmp = [];

    for (var i = 0; i < length; i++) {
      tmp.push(Math.floor(Math.random() * 50) + 5);
    }

    setNumbers(tmp);
  };

  const swap = (i, j, tmpArr) => {
    setSwap1(i);
    setSwap2(j);
    let tmp = tmpArr[i];
    tmpArr[i] = tmpArr[j];
    tmpArr[j] = tmp;

    setNumbers(tmpArr);
  };

  async function partition(left, right, tmpArr) {
    var pivot = tmpArr[Math.floor((right + left) / 2)],
      i = left,
      j = right;

    while (i <= j) {
      while (tmpArr[i] < pivot) {
        i++;
        setActive(i);
        await sleep(100);
      }
      while (tmpArr[j] > pivot) {
        j--;
        setActive(j);
        await sleep(100);
      }
      if (i <= j) {
        // setSwapArr([i, j]);
        swap(i, j, tmpArr);
        await sleep(100);

        i++;
        j--;
      }
    }

    // console.log(numbers);

    return i;
  }

  async function quickSort(left, right, tmpArr) {
    var index;

    index = await partition(left, right, tmpArr);

    if (left < index - 1) {
      quickSort(left, index - 1, tmpArr);
    }
    if (index < right) {
      quickSort(index, right, tmpArr);
    }
    setActive(Infinity);
    setSwap1(Infinity);
    setSwap2(Infinity);
  }

  return (
    <div className="sorting">
      <div className="sorting-buttons">
        <button
          onClick={() => {
            resetArray();
          }}
        >
          Generate New Array
        </button>
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
          Quick Sort Me!
        </button>
      </div>
      {/* <button
        onClick={() => {
          clearInterval(ColorChange);
        }}
      >
        Stop colour changing
      </button> */}
      <div className="allBars">
        {numbers.map((val, index) => (
          <div className="completeBar" key={Math.random()}>
            {/* <p> {val}</p> */}
            <div
              style={{ height: `${val * 5}px` }}
              // className="bar"
              className={`bar ${
                index === swap1 || index === swap2 ? "active" : ""
              }  ${index === acitve ? "active1" : ""}`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
