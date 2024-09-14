import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(1);

  function nextHandler() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  function previousHandler() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  

  // Step titles
  const stepTitles = [
    "Step 1: Learn React",
    "Step 2: Practice Code",
    "Step 3: Build Projects",
  ];

  return (
    <div style={container}>
      <div style={main}>
        <div style={number}>
          <p style={Para(step === 1)}>1</p>
          <p style={Para(step === 2)}>2</p>
          <p style={Para(step === 3)}>3</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <h2>{stepTitles[step - 1]}</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "25px",
          }}
        >
          <button
            style={step === 1 ? disabledBtn : btn}
            onClick={previousHandler}
            disabled={step === 1}
          >
            Previous
          </button>
          <button
            style={step === 3 ? disabledBtn : btn}
            onClick={nextHandler}
            disabled={step === 3}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
