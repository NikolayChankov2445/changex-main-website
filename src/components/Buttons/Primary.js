import * as React from "react";
import styled from "styled-components";

export const ReactPrimaryButton = styled.div`
  box-shadow: none;
  padding: 0.813rem 2rem;
  border-radius: 16px;
  text-transform: none;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  background-color: #3418D8;
  width: fit-content;
  color: #fff;
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
&:focus {
  background-color: #3418D8;
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
  color: #fff;
  width: fit-content;
  font-family: 'Source Sans Pro',sans-serif;
&:hover {
  color: #fff;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  border: none;
},
&:active: {
  box-shadow: none;
  outline: none;
  color: #fff;
  text-decoration: none;
},
&:focus: {
  box-shadow: none;
  color: #fff;
  outline: none;
  text-decoration: none;
}
`

export function PrimaryButton({text,url, icon}) {
    return (
        <ReactPrimaryButton variant="contained" size="large" endIcon={icon}>
            <Link href={url} target="_blank"  rel="noreferrer">{text}</Link>
        </ReactPrimaryButton>
    );
}
