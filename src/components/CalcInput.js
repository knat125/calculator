import React, { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";
import { CalcInputStyles } from "../styles/CalcInput.styled";

const CalcInput = () => {
    const { calcValue } = useContext(CalculatorContext);
    return (
        <CalcInputStyles>
            {calcValue}
        </CalcInputStyles>
    )
}

export default CalcInput;