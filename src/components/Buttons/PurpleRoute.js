import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const PurpleButtonRoutes = styled.div`
  box-shadow: none;
  padding: 0.813rem 2rem;
  border-radius: 16px;
  text-transform: none;
  font-size: 24px;
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
    &:active,
    &:focus {
      background-color: #8366F4;
      box-shadow: none;
      outline: none;
      text-decoration: none;
      color: #ffffff;
      border: none;
    },
`

export function PurpleButtonRoute({text,url, size}) {
    return (
        <PurpleButtonRoutes variant="contained" size={size}>
            <Link className="routesBtn" to={url  || ''}>
                {text}
            </Link>
        </PurpleButtonRoutes>
    );
}
