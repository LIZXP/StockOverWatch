import React from "react";
import "./Stockcards.styles.scss";
function Stockcards({ stocks }) {
  const findTopThreeStocks = (arr) => {
    return arr
      .sort((a, b) => {
        return a.o - a.c - (b.o - b.c);
      })
      .slice(0, 4);
  };
  console.log(findTopThreeStocks(stocks));
  return (
    <div className="Stockcards-container">
      <div>
        <span>Stockcards1</span>
      </div>
      <div>Stockcards2</div>
      <div>Stockcards3</div>
      <div>Stockcards4</div>
    </div>
  );
}

export default Stockcards;
