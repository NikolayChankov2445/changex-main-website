import * as React from "react";
import styled from "styled-components";

export const ReactLimeSmallButton = styled.div`
  box-shadow: none;
  padding: 0.813rem 2rem;
  border-radius: 8px;
  margin-bottom: 16px;
  text-transform: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  background-color: #E0FB92;
  color: #3418D8;
  cursor: pointer;
  width: fit-content;
  font-family: 'Source Sans Pro', sans-serif;
  &:hover {
    background-color: #CEF953;
    box-shadow: none;
    outline: none;
    text-decoration: none;
    color: #141414;
    border: none;
  },
    &:active {
      background-color: #A7DD08;
      box-shadow: none;
      outline: none;
      text-decoration: none;
      color: #141414;
      border: none;
    },
    &:focus {
      background-color: #E0FB92;
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
  font-family: 'Source Sans Pro',sans-serif;
&:hover {
  color: #3418D8;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  border: none;
},
&:active: {
  box-shadow: none;
  outline: none;
  color: #3418D8;
  text-decoration: none;
},
&:focus: {
  box-shadow: none;
  color: #3418D8;
  outline: none;
  text-decoration: none;
}
`

export function LimeSmallButton({text, url, size}) {
    return (
        <ReactLimeSmallButton variant="contained" size={size}>
            <Link href={url} target="_blank"  rel="noreferrer">{text}</Link>
        </ReactLimeSmallButton>
    );
}

