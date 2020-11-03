import React, { useState } from "react";
import Result from "components/Result";
import Button from "components/Button";
import { SCApp } from "./styles";

const App = () => {
  const [expression, setExpression] = useState("");
  const addToExpresion = (text) => {
    if (expression == "0") {
      setExpression(text);
    }
    setExpression(expression + text);
  };
  const deleteExpression = () => {
    setExpression("0");
  };
  const backExpression = () => {
    const string = expression.toString();
    const trimmedExpression = string.substring(0, string.length - 1);
    setExpression(trimmedExpression);
  };
  const evaluateExpression = () => {
    const stringExpression = expression.toString();
    const evaluatedExpression = eval(stringExpression);
    setExpression(evaluatedExpression);
  };

  const buttons = [
    { value: "1", type: "expression", clickHandler: addToExpresion },
    { value: "2", type: "expression", clickHandler: addToExpresion },
    { value: "3", type: "expression", clickHandler: addToExpresion },
    { value: "+", type: "function", clickHandler: addToExpresion },
    { value: "4", type: "expression", clickHandler: addToExpresion },
    { value: "5", type: "expression", clickHandler: addToExpresion },
    { value: "6", type: "expression", clickHandler: addToExpresion },
    { value: "-", type: "function", clickHandler: addToExpresion },
    { value: "7", type: "expression", clickHandler: addToExpresion },
    { value: "8", type: "expression", clickHandler: addToExpresion },
    { value: "9", type: "expression", clickHandler: addToExpresion },
    { value: "*", type: "function", clickHandler: addToExpresion },
    { value: "C", type: "function", clickHandler: deleteExpression },
    { value: "0", type: "expression", clickHandler: addToExpresion },
    { value: "<-", type: "function", clickHandler: backExpression },
    { value: "/", type: "function", clickHandler: addToExpresion },
    { value: "=", type: "function", clickHandler: evaluateExpression },
  ];
  const renderButtons = () =>
    buttons.map((button) => (
      <Button
        value={button.value}
        type={button.type}
        clickHandler={() => {
          button.clickHandler(button.value);
        }}
      />
    ));

  return (
    <SCApp>
      <Result value={expression} />
      {renderButtons()}
    </SCApp>
  );
};

export default App;
