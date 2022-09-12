import React from "react";
import Node from "./Node";

export default function Bar({ times }) {
  function getrDivList() {
    const nodes = [];

    for (let index = 0; index < times; index++) {
      nodes.push(<Node key={index} />);
    }

    return nodes;
  }

  return <div className="bar">{getrDivList()}</div>;
}
