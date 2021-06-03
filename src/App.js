import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(null);
  const [percent, setPercent] = useState(null);
  const [numPpl, setNumPpl] = useState(null);
  const [result, setResult] = useState();

  let total;

  const calcBill = () => {
    if (bill === "" || bill === "0" || percent === null) {
      alert("enter a valid input");
    }
    total = (bill * percent) / 100 / numPpl;

    setResult(total.toFixed(2));
  };

  return (
    <div className="container">
      <p id="header">TIP CALCULATOR</p>
      <p>How much was your bill?</p>
      <label htmlFor="bill">$</label>
      <input
        type="number"
        id="bill"
        className="input"
        placeholder="Bill Amount"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <p>How was your service?</p>
      <select
        id="service"
        required
        value={percent}
        onChange={(e) => {
          setPercent(e.target.value);
        }}
      >
        <option selected disabled>
          -- Choose an Option --
        </option>
        <option value="30">30% - Outstanding</option>
        <option value="20">20% - Good</option>
        <option value="15">15% - It was OK</option>
        <option value="10">10% - Bad</option>
        <option value="5">5% - Terrible</option>
      </select>
      <p>How many people are sharing the bill?</p>
      <input
        type="number"
        id="numPpl"
        className="input"
        placeholder="Number of People"
        value={numPpl}
        onChange={(e) => setNumPpl(e.target.value)}
      />
      <label id="people">people</label>
      <button id="btn" onClick={() => calcBill()}>
        CALCULATE
      </button>
      <div id="tip">
        <h4>TIP AMOUNT</h4>
        <h3>${result}</h3>
        <h4>each</h4>
      </div>
    </div>
  );
}
