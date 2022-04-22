import { useState, createContext } from "react";

export const CalculatorContext = createContext();

const CalculatorProvider = (props) => {
    const [calcValue, setCalcValue] = useState("");

    return (
        <CalculatorContext.Provider
            value={{
                calcValue,
                setCalcValue
            }}
        >
            {props.children}
        </CalculatorContext.Provider>
    );
}

export default CalculatorProvider;