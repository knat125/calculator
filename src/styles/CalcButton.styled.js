import styled from "styled-components";

export const CalcButtonStyles = styled.button`
    width:  ${props => props.wide ? "50%" : "25%"};
    padding: ${props => props.wide ? "14px 30px" : "14px 5px"};
    background-color: ${props => props.secondary ? "#FF8E00" : "#E0E0E0"};
    color: ${props => props.secondary ? "#FFFFFF" : "#111111"};
    border: 1px solid #898989;
    text-align: ${props => props.wide ? "left" : "center"};
    font-size: 28px;
`