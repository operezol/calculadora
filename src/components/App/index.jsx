import React, { useState } from "react";
import words from "lodash.words";
import Result from "components/Result";
import Button from "components/Button";
import { SCApp } from "./styles";

const App = () => {
  const [expression, setExpression] = useState("");

  const operators = words(expression, /[^-^+^*^/]+/g);

  const addToExpresion = (text) => {
    if (expression === "0") {
      setExpression(`${text}`);
    } else {
      setExpression(`${expression}${text}`);
    }
  };

  const deleteExpression = () => {
    setExpression("");
  };

  const backExpression = () => {
    setExpression(expression.substring(0, expression.length - 1));
  };

  const evaluateExpression = () => {
    setExpression(eval(expression).toString());
  };

  const buttons = [
    { value: "1", type: "number", clickHandler: addToExpresion },
    { value: "2", type: "number", clickHandler: addToExpresion },
    { value: "3", type: "number", clickHandler: addToExpresion },
    { value: "+", type: "", clickHandler: addToExpresion },
    { value: "4", type: "number", clickHandler: addToExpresion },
    { value: "5", type: "number", clickHandler: addToExpresion },
    { value: "6", type: "number", clickHandler: addToExpresion },
    { value: "-", type: "", clickHandler: addToExpresion },
    { value: "7", type: "number", clickHandler: addToExpresion },
    { value: "8", type: "number", clickHandler: addToExpresion },
    { value: "9", type: "number", clickHandler: addToExpresion },
    { value: "*", type: "", clickHandler: addToExpresion },
    { value: "C", type: "", clickHandler: deleteExpression },
    { value: "0", type: "number", clickHandler: addToExpresion },
    { value: "<-", type: "", clickHandler: backExpression },
    { value: "/", type: "", clickHandler: addToExpresion },
    { value: "=", type: "", clickHandler: evaluateExpression },
  ];

  const renderButtons = () =>
    buttons.map(({ value, type, clickHandler }, index) => (
      <Button
        key={index}
        value={value}
        type={type}
        clickHandler={() => {
          clickHandler(value);
        }}
      />
    ));
  const resultValue =
    operators.length > 0 ? operators[operators.length - 1] : 0;
  return (
    <SCApp>
      <Result value={resultValue} />
      {renderButtons()}
    </SCApp>
  );
};

export default App;
