import * as React from "react";
import styled from "styled-components";

export const ReactPurpleButton = styled.div`
  box-shadow: none;
  padding: 0.813rem 2rem;
  border-radius: 16px;
  text-transform: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
  line-height: 1.5;
  background-color: #8366F4;
  color: #FFF;
  width: fit-content;
  font-family: 'Source Sans Pro', sans-serif;
      &:hover {
        background-color: #AD9AF7;
        box-shadow: none;
        outline: none;
        text-decoration: none;
        color: #ffffff;
        border: none;
      },
    &:active {
      background-color: #5540AE;
      box-shadow: none;
      outline: none;
      text-decoration: none;
      color: #ffffff;
      border: none;
    },
    &:focus {
      background-color: #8366F4;
      box-shadow: none;
      outline: none;
      text-decoration: none;
      color: #ffffff;
      border: none;
    },
`

export const Link = styled.a`
  outline: none;
  text-decoration: none;
  color: #FFF;
  font-family: 'Source Sans Pro',sans-serif;
&:hover {
  color: #FFF;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  border: none;
},
&:active: {
  box-shadow: none;
  outline: none;
  color: #FFF;
  text-decoration: none;
  border: none;
},
&:focus: {
  box-shadow: none;
  color: #FFF;
  outline: none;
  border: none;
  text-decoration: none;
}
`

export function PurpleButton({text,url}) {
    return (
        <ReactPurpleButton href={url} variant="contained" size="large">
            <Link href={url} target="_blank"  rel="noreferrer">{text}</Link>
        </ReactPurpleButton>
    );
}
