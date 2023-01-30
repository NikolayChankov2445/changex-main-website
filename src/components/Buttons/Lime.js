import * as React from "react";
import styled from "styled-components";

export const ReactLimeButton = styled.button`
    box-shadow: none;
    padding: 13px 32px;
    border-radius: 8;
    marginB-bottom: 16;
    text-transform: none;
    font-size: large;
    font-weight: 600;
    line-height: 1.5;
    background-color: #E0FB92;
    color: #3418D8;
    font-family: Source Sans Pro,sans-serif;
    &:hover {
        background-color: #CEF953;
        box-shadow: none;
        outline: none;
        text-decoration: none;
        color: #141414;
        border: none
    },
    &:active: {
        box-shadow: none;
        background-color: #A7DD08;
        outline: none;
        text-decoration: none;
        color: #141414
    },
    &:focus: {
        box-shadow: none;
        background-color: #A7DD08;
        color: #141414;
        outline: none; 
        text-decoration: none
    }
`

export function LimeButton({text, url, size}) {
    return (
        <ReactLimeButton href={url} variant="contained" size={size}>
            {text}
        </ReactLimeButton>
    );
}

