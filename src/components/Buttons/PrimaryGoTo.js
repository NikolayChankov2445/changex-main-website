import * as React from "react";
import styled from "styled-components";
import {BsArrowDown} from "react-icons/bs";

export const ReactPrimaryGoToButton = styled.div`
  box-shadow: none;
  padding: 0.813rem 2rem;
  border-radius: 16px;
  text-transform: none;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  background-color: #3418D8;
  cursor: pointer;
  color: #fff;
  width: fit-content;
  font-family: 'Source Sans Pro', sans-serif;
  &:hover {
    background-color: #7D6BE6;
    box-shadow: none;
    outline: none;
    text-decoration: none;
    color: #ffffff;
    border: none;
  },
&:active {
  background-color: #26129D;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  color: #ffffff;
  border: none;
},
&:focus{
  background-color: #3418D8;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  color: #ffffff;
  border: none;
},
`

export function PrimaryGoToButton({text,url, icon}) {
    return (
        <ReactPrimaryGoToButton variant="contained" size="large" endIcon={icon}>
            {text} {<BsArrowDown style={{fontWeight: 600}}/>}
        </ReactPrimaryGoToButton>
    );
}
