import { useState } from 'react';

function App() {
  const [step, setStep] = useState(0);
  const [date ,setDate]=useState(0);
  const day =new Date();
  day.setDate(day.getDate()+date);
 
  return (
    <>
      <div>
      <button onClick={() => setStep((s) => s - 1)}>-</button>
      <span> Steps {step}</span>
      <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={()=>setDate((d)=> d-step)}>-</button>
        <span>Date {date}</span>
        <button onClick={()=>setDate((d)=>step+d)}>+</button>
      </div>

      <div> Current date : {day.toDateString()}</div>
      
    </>
  );
}

export default App;
