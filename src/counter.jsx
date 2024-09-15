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

  // Styling
  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  };

  const main = {
    width: "500px",
    height: "400px",
    backgroundColor: "#f0f0f0",
    paddingTop: "25px",
  };

  const number = {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  };

  const Para = (isActive) => ({
    backgroundColor: isActive ? "#6e00ff" : "#ccc",
    color: "white",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    fontSize: "18px",
    fontWeight: "bold",
  });

  const btn = {
    backgroundColor: "#6e00ff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
  };

  const disabledBtn = {
    ...btn,
    backgroundColor: "#999",
    cursor: "not-allowed",
  };

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
