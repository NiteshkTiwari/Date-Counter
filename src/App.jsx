import { useState, useMemo } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(0);

  const day = useMemo(() => {
    const newDay = new Date();
    newDay.setDate(newDay.getDate() + date);
    return newDay;
  }, [date]);

  function handleReset() {
    setStep(1);
    setDate(0);
  }

  return (
    <>
      <div>
        <label htmlFor="stepRange">Step: {step}</label>
        <input
          id="stepRange"
          type="range"
          min="1"
          max="100"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          aria-label="Adjust step range"
        />
      </div>

      <div>
        <button
          onClick={() => setDate((d) => d - step)}
          aria-label="Decrease date"
        >
          -
        </button>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(Number(e.target.value))}
          aria-label="Set date offset"
        />
        <button
          onClick={() => setDate((d) => step + d)}
          aria-label="Increase date"
        >
          +
        </button>
      </div>

      <div className="current-date">Current date: {day.toDateString()}</div>
      <button onClick={handleReset} disabled={date === 0 && step === 1}>
        Reset
      </button>
    </>
  );
}

export default App;
