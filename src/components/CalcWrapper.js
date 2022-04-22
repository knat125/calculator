import React from "react";
import { CalcWrapperStyles, CalcInnerStyles } from "../styles/CalcWrapper.styled";

const CalcWrapper = (props) => {
    return (
        <CalcWrapperStyles>
            <CalcInnerStyles>
                {props.children}
            </CalcInnerStyles>
        </CalcWrapperStyles>
    )
}

export default CalcWrapper;