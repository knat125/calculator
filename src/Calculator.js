import React from "react";
import {
  Container,
  CalcWrapper,
  CalcInput,
  CalcButton,
  CalcButtonsWrapper
} from "./components";
import CalculatorProvider from "./context/CalculatorContext";
import GlobalStyles from "./styles/Global";

const Calculator = () => {
  return (
    <CalculatorProvider>
      <GlobalStyles />
      <Container>
        <CalcWrapper>
          <CalcInput />
          <CalcButtonsWrapper>
            <CalcButton value="7" type="number" />
            <CalcButton value="8" type="number" />
            <CalcButton value="9" type="number" />
            <CalcButton value="*" type="operator" />
            <CalcButton value="4" type="number" />
            <CalcButton value="5" type="number" />
            <CalcButton value="6" type="number" />
            <CalcButton value="-" type="operator" />
            <CalcButton value="1" type="number" />
            <CalcButton value="2" type="number" />
            <CalcButton value="3" type="number" />
            <CalcButton value="+" type="operator" />
            <CalcButton value="0" type="number" />
            <CalcButton value="=" type="result" />
            <CalcButton value="/" type="operator" />
          </CalcButtonsWrapper>
        </CalcWrapper>
      </Container>
    </CalculatorProvider>
  );
}

export default Calculator;
