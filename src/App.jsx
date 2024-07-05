import { useState } from 'react';

import './App.css';
import iconCalc from './assets/images/icon-calculator.svg';
import illustration from './assets/images/illustration-empty.svg';
import { Inputbox } from './components';

function App() {
  return (
    <div className="App">
      <div className="calcArea">
        <h1>Mortgage Calculator</h1>
        <button className="clearButton">Clear All</button>

        <Inputbox title="Mortgage Amount" tag="€" type="normal" />

        <Inputbox title="Mortgage Term" tag="years" type="reverse" />

        <Inputbox title="Interest Rate" tag="%" type="reverse" />

        <div className="checkBoxes">
          <p>Mortgage Type</p>
          <div className="checkboxWrapper">
            <input type="checkbox" />
            <p>Repayment</p>
          </div>
          <div className="checkboxWrapper">
            <input type="checkbox" />
            <p>Interest Only</p>
          </div>
        </div>

        <button className="calcButton">
          <i>
            <img src={iconCalc} alt="" />
          </i>
          Calculate Repayments
        </button>
      </div>

      <div className="resultArea">
        <img src={illustration} alt="" />
        <h2>Results shown here</h2>
        <p>
          Complete the form and click "Calculate Repayments" to see what your
          monthly repaymants would be.
        </p>
      </div>
    </div>
  );
}

export default App;
