// The useState hook is imported to retain data between renders, and to update the variable.
import { useState, useRef } from "react";

export default function Calc() {
  // Create and store button value using hooks first holds the state, second is the dispatch which retrieves data
  // Keeps track of curent value and previous value that a user enters
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState("0");

  // Keeps track of the operation
  const [operation, setOperator] = useState(null);

  // Calculator operators
  // Handling diffrent types of button that a user can click
  // When a user clicks a number button, appends that number to current value
  // When a user clicks an operator button, saves the current value to previous value, clears current value

  const handleClick = (e) => {
    const getSameValue = e.currentTarget.value;
    switch (getSameValue) {
      // Numbers
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        setCurrentValue(
          currentValue === "0" ? getSameValue : currentValue + getSameValue
        );
        break;

      // Calculator operations
      case "+":
      case "-":
      case "*":
      case "%":
        setPreviousValue(currentValue);
        setCurrentValue("0");
        setOperator(getSameValue);
        break;
      // error handling for not dividing by 0
      case "/":
        if (currentValue === "0") {
          alert("Cannot divide by zero");
          break;
        }
        setPreviousValue(currentValue);
        setCurrentValue("0");
        setOperator(getSameValue);
        break;

      //If there is a decimal point
      case ".":
        if (!currentValue.includes(".")) {
          setCurrentValue(currentValue + ".");
        }
        break;

      // Calculating the result
      case "=":
        const prev = parseFloat(previousValue);
        const curr = parseFloat(currentValue);
        const computation = // if operation is equal to operation, do the operation of previous value and current value
          operation === "+"
            ? prev + curr
            : operation === "-"
            ? prev - curr
            : operation === "*"
            ? prev * curr
            : operation === "/"
            ? prev / curr
            : operation === "%"
            ? prev % curr
            : curr;
        setCurrentValue(computation); // sets the value to the computation variable
        setPreviousValue("0"); // erases previous value
        setOperator(null); // erases the value of operator used

        break;

      // Clearing the results
      case "clear-all":
        setCurrentValue("0");
        setPreviousValue(null);
        setOperator(null);
        break;
      case "clear-entry":
        setCurrentValue("0");
        break;
      default:
        setCurrentValue(null);
        break;
    }
  };

  // Add a value attrbute to the buttons
  // Make the buttons 0 - 9, ., +, -, /, * C, CE, %, =
  // place in table of 4 columns(4 elements), 5 rows

  return (
    <div className="App">
      <h1>Calculator App</h1>
      {/*This outputs the value to a paragraph*/}
      <p id="ResultScreen">{currentValue}</p>
      <div className="CalcBtns" id="first-row">
        <button value="clear-all" onClick={handleClick}>
          AC
        </button>
        <button value="clear-entry" onClick={handleClick}>
          CE
        </button>
        <button value="%" onClick={handleClick}>
          %
        </button>
        <button value="/" onClick={handleClick}>
          ÷
        </button>
      </div>
      <div className="CalcBtns">
        <button value="7" onClick={handleClick}>
          7
        </button>
        <button value="8" onClick={handleClick}>
          8
        </button>
        <button value="9" onClick={handleClick}>
          9
        </button>
        <button value="*" onClick={handleClick}>
          x
        </button>
      </div>
      <div className="CalcBtns">
        <button value="4" onClick={handleClick}>
          4
        </button>
        <button value="5" onClick={handleClick}>
          5
        </button>
        <button value="6" onClick={handleClick}>
          6
        </button>
        <button value="-" onClick={handleClick}>
          -
        </button>
      </div>
      <div className="CalcBtns">
        <button value="1" onClick={handleClick}>
          1
        </button>
        <button value="2" onClick={handleClick}>
          2
        </button>
        <button value="3" onClick={handleClick}>
          3
        </button>
        <button value="+" onClick={handleClick}>
          +
        </button>
      </div>
      <div className="CalcBtns">
        <button id="big-zero" value="0" onClick={handleClick}>
          0
        </button>
        <button value="." onClick={handleClick}>
          .
        </button>
        <button value="=" onClick={handleClick}>
          =
        </button>
      </div>
    </div>
  );
}
