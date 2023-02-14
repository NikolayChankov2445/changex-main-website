import * as React from "react";
import styled from "styled-components";

export const ReactButtonSubmit = styled.div`
  box-shadow: none;
  padding: 0.813rem 2rem;
  border-radius: 8px;,
  text-transform: none;
  color: #FFF; 
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
  line-height: 1.5;
  width: fit-content;
  font-family: 'Source Sans Pro', sans-serif;
    '&:hover': {
      background-color: #AD9AF7;
      box-shadow: none;
      color: #ffffff;
      border: none
    },
    '&:active': {
      background-color: #5540AE;
      box-shadow: none;
      outline: none;
      color: #ffffff
    },
   '&:focus': {
      box-shadow: none;
      background-color: #5540AE;
      outline: none;
      color: #ffffff;
    },
`
export const Link = styled.a`
  outline: none;
  text-decoration: none;
  font-family: 'Source Sans Pro',sans-serif;
&:hover {
  box-shadow: none;
  outline: none;
  text-decoration: none;
  border: none;
},
&:active: {
  box-shadow: none;
  outline: none;
  text-decoration: none;
},
&:focus: {
  box-shadow: none;
  outline: none;
  text-decoration: none;
}
`

export function ButtonSubmit({text,url, background, color}) {
    return (
        <ReactButtonSubmit style={{ backgroundColor: background}}  href={url} variant="contained" size="large">
            <Link style={{color: color}} href={url} target="_blank" rel="noreferrer">{text}</Link>
        </ReactButtonSubmit>
    )
}
