import * as React from "react";
import styled from "styled-components";
import {BsArrowDown} from "react-icons/bs";

export const ReactPrimaryGoToButton = styled('button')({
    boxShadow: 'none',
    borderRadius: "1rem",
    padding: "0.813rem 2rem",
    textTransform: 'none',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.5,
    backgroundColor: '#3418D8',
    color: '#fff',
    fontFamily: [
        'Source Sans Pro'
    ].join(','),
    '&:hover': {
        backgroundColor: '#7D6BE6',
        boxShadow: 'none',
        color: "#ffffff",
        border: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#26129D',
        outline: 'none',
        color: "#ffffff",
    },
    '&:focus': {
        boxShadow: 'none',
        outline: 'none'
    },
});
/*
export const Link = styled('a')({
    outline: "none",
    textDecoration: "none",
    color: '#fff',
    fontFamily: [
        'Source Sans Pro'
    ].join(','),
    '&:hover': {
        boxShadow: 'none',
        outline: 'none',
        color: '#fff',
        textDecoration: 'none',
        border: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        outline: 'none',
        color: '#fff',
        textDecoration: 'none',
    },
    '&:focus': {
        boxShadow: 'none',
        color: '#fff',
        outline: 'none',
        textDecoration: 'none',
    },
});
*/

export function PrimaryGoToButton({text,url, icon}) {
    return (
        <ReactPrimaryGoToButton variant="contained" size="large" endIcon={icon}>
            {text} {<BsArrowDown style={{fontWeight: 600}}/>}
        </ReactPrimaryGoToButton>
    );
}
