import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(0);
  const day = new Date();
  day.setDate(day.getDate() + date);

  function handleReset() {
    setStep(0);
    setDate(0);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={() => setDate((d) => d - step)}>-</button>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(Number(e.target.value))}
        />
        <button onClick={() => setDate((d) => step + d)}>+</button>
      </div>

      <div> Current date : {day.toDateString()}</div>
      {date !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </>
  );
}

export default App;
