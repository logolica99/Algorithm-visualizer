import React, { useEffect, useState } from "react";

export default function QuickSort({ length }) {
  const [numbers, setNumbers] = useState([]);

  const [activeNumbers, setActiveNumbers] = useState([]);
  const [swap1, setSwap1] = useState();
  const [swap2, setSwap2] = useState();
  const [acitve, setActive] = useState();
  const [ColorChange, setColorChange] = useState();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

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
      setActiveNumbers([]);
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
    <div>
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
        Sort Me
      </button>
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
                index == swap1 || index == swap2 ? "active" : ""
              }  ${index == acitve ? "active1" : ""}`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
