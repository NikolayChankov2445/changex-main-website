import * as React from "react";
import styled from "styled-components";

export const ReactButtonSubmit = styled('button')({
    boxShadow: 'none',
    padding: "0.813rem 2rem",
    borderRadius: "8px",
    textTransform: 'none',
    color: '#FFF',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.5,
    fontFamily: [
        'Source Sans Pro'
    ].join(','),
    '&:hover': {
        backgroundColor: '#AD9AF7',
        boxShadow: 'none',
        color: "#ffffff",
        border: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#5540AE',
        outline: 'none',
        color: "#ffffff",
    },
    '&:focus': {
        boxShadow: 'none',
        backgroundColor: '#5540AE',
        outline: 'none',
        color: "#ffffff"
    },
});

export const Link = styled('a')({
    outline: "none",
    textDecoration: "none",
    fontFamily: [
        'Source Sans Pro'
    ].join(','),
    '&:hover': {
        boxShadow: 'none',
        outline: 'none',
        textDecoration: 'none',
        border: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        outline: 'none',
        textDecoration: 'none',
    },
    '&:focus': {
        boxShadow: 'none',
        outline: 'none',
        textDecoration: 'none',
    },
});


export function ButtonSubmit({text,url, background, color}) {
    return (
        <ReactButtonSubmit style={{ backgroundColor: background}}  href={url} variant="contained" size="large">
            <Link style={{color: color}} href={url} target="_blank">{text}</Link>
        </ReactButtonSubmit>
    )
}
