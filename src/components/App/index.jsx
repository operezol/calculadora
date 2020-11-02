import React from "react";
import Result from "components/Result";
import Button from "components/Button";
import { SCApp } from "./styles";

const App = () => {
  const clickHandlerFunction = (text) => {
    console.log("Button.clickHandler1", text);
  };
  return (
    <SCApp>
      <Result value={"10000"} />
      <Button value="1" section="numbers" clickHandler={clickHandlerFunction} />
      <Button value="2" section="numbers" clickHandler={clickHandlerFunction} />
      <Button value="3" section="numbers" clickHandler={clickHandlerFunction} />
      <Button
        value="+"
        section="operators"
        clickHandler={clickHandlerFunction}
      />
      <Button value="4" section="numbers" clickHandler={clickHandlerFunction} />
      <Button value="5" section="numbers" clickHandler={clickHandlerFunction} />
      <Button
        value="6"
        section="numbers"
        clickHandler={clickHandlerFunction}
      />{" "}
      <Button
        value="-"
        section="operators"
        clickHandler={clickHandlerFunction}
      />
      <Button value="7" section="numbers" clickHandler={clickHandlerFunction} />
      <Button value="8" section="numbers" clickHandler={clickHandlerFunction} />
      <Button value="9" section="numbers" clickHandler={clickHandlerFunction} />
      <Button
        value="*"
        section="operators"
        clickHandler={clickHandlerFunction}
      />
      <Button value="0" section="numbers" clickHandler={clickHandlerFunction} />
      <Button
        value="C"
        section="functions"
        clickHandler={clickHandlerFunction}
      />
      <Button
        value="<-"
        section="functions"
        clickHandler={clickHandlerFunction}
      />
      <Button
        value="/"
        section="operators"
        clickHandler={clickHandlerFunction}
      />
      <Button
        value="="
        section="operators"
        clickHandler={clickHandlerFunction}
      />
    </SCApp>
  );
};

export default App;
