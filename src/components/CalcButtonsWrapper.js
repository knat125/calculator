import React from "react";
import { CalcButtonsWrapperStyles } from "../styles/CalcButtonsWrapper.styled";

const CalcButtonsWrapper = (props) => {
    return (
        <CalcButtonsWrapperStyles>
            {props.children}
        </CalcButtonsWrapperStyles>
    )
}

export default CalcButtonsWrapper;