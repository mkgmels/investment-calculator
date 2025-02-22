import { useState } from "react";

export default function Calculator({handleInputData}) {
  function inputChangeHandler(event, field) {
    handleInputData(field, Number(event.target.value));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            required
            onChange={(event) => inputChangeHandler(event, "initialInvestment")}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            required
            onChange={(event) => inputChangeHandler(event, "annualInvestment")}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            required
            onChange={(event) => inputChangeHandler(event, "expectedReturn")}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            id="duration"
            required
            onChange={(event) => inputChangeHandler(event, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
