import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const PrimaryButtonRoutes = styled.div`
  box-shadow: none;
  padding: 0.813rem 2rem;
  border-radius: 16px;
  text-transform: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  background-color: #3418D8;
  color: #ffffff;
  width: fit-content;
  font-family: 'Source Sans Pro', sans-serif;
      '&:hover': {
        background-color: #7D6BE6;
        box-shadow: none;
        outline: none;
        text-decoration: none;
        color: #ffffff;
        border: none;
      },
    '&:active': {
      background-color: #26129D;
      box-shadow: none;
      outline: none;
      text-decoration: none;
      color: #ffffff;
      border: none;
    },
    '&:focus': {
      background-color: #3418D8;
      box-shadow: none;
      outline: none;
      text-decoration: none;
      color: #ffffff;
      border: none;
    },
`

export function PrimaryButtonRoute({text,url}) {
    return (
        <PrimaryButtonRoutes variant="contained" size="large">
            <Link className="routesBtn" to={url || ''}>
                {text}
            </Link>
        </PrimaryButtonRoutes>
    );
}
