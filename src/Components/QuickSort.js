import React from "react";
import Bar from "./Bar";

export default function QuickSort({ length }) {
  return (
    <div>
      <div className="allBars">
        {Array.from({ length: length }, () =>
          Math.floor(Math.random() * 30 + 1)
        ).map((value) => (
          <Bar times={value} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
