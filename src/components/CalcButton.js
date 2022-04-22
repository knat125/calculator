import React, { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";
import { CalcButtonStyles } from "../styles/CalcButton.styled";

const CalcButton = ({ value, type }) => {
    const { calcValue, setCalcValue } = useContext(CalculatorContext);

    const returnResult = () => {
        const result = new Function("return " + calcValue)();

        if (result.toString().includes(".") && result.toString().length > 9) {
            setCalcValue(result.toString().slice(0, 8))
            return false
        }

        setCalcValue(result)
    }

    const calcButtonAction = () => {
        switch (type) {
            case "number":
                setCalcValue(`${calcValue}${value}`);
                break;
            case "operator":
                setCalcValue(`${calcValue}${value}`);
                break;
            case "result":
                returnResult();
                break;
            default:
                break;
        }
    }

    return (
        <CalcButtonStyles wide={value === "0" ? true : false} secondary={type === "number" ? false : true} onClick={calcButtonAction}>
            {value}
        </CalcButtonStyles>
    )
}

export default CalcButton;