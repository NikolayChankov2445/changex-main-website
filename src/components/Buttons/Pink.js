import * as React from "react";
import styled from "styled-components";

export const ReactPinkButton = styled.button`
  box-shadow: none;
  padding: 0.813rem 2rem;
  border-radius: 8px;
  margin-bottom: 16px;
  text-transform: none;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  background-color: #EBE8FC;
  cursor: pointer;
  color: #3418D8;
  font-family: 'Source Sans Pro', sans-serif;
  &:hover {
    background-color: #AD9AF7;
    box-shadow: none;
    outline: none;
    text-decoration: none;
    color: #3418D8;
    border: none;
  },
    &:active {
      background-color: #EBE8FC;
      box-shadow: none;
      outline: none;
      text-decoration: none;
      color: #3418D8;
      border: none;
    },
&:focus{
  background-color: #5540AE;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  color: #3418D8;
  border: none;
},
`

export const Link = styled.a`
  outline: none;
  text-decoration: none;
  color: #3418D8;
  width: fit-content;
  font-family: 'Source Sans Pro',sans-serif;
&:hover {
  color: #3418D8;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  border: none;
},
&:active {
  box-shadow: none;
  outline: none;
  color: #3418D8;
  text-decoration: none;
},
&:focus {
  box-shadow: none;
  color: #3418D8;
  outline: none;
  text-decoration: none;
}
`

export function PinkButton({text, url, size}) {
    return (
        <ReactPinkButton href={url} variant="contained" size={size}>
            <Link href={url} target="_blank"  rel="noreferrer">{text}</Link>
        </ReactPinkButton>
    );
}
