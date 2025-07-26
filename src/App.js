import { useState } from "react";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setpercentage2] = useState(0);
  const tip = ((bill * percentage1) / 100 + (bill * percentage2) / 100) / 2;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setpercentage2(0);
  }

  return (
    <div className="tipCalculator">
      <Bill bill={bill} onSetBill={setBill} />
      <Select percentage={percentage1} onSetPercentage={setPercentage1} />
      <Select percentage={percentage2} onSetPercentage={setpercentage2} />
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onHandleReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div className="bill">
      <label>How much the bill ?</label>
      <input
        type="text"
        placeholder="bill checkout"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function Select({ percentage, onSetPercentage }) {
  return (
    <div className="select">
      <label>How much your satisfaction for service?</label>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value={0}>Service is bad (0%)</option>
        <option value={5}>service is ok (5%)</option>
        <option value={10}>service is good (10%)</option>
        <option value={20}>service is amazing (20%)</option>
        <option value={30}>service is super amazing (30%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      your total cost is {bill + tip}$ ({bill}$ bill + {tip}$ tip)
    </h3>
  );
}

function Reset({ onHandleReset }) {
  return <button onClick={onHandleReset}>Reset</button>;
}
