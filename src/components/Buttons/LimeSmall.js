import * as React from "react";
import styled from "styled-components";

export const ReactLimeSmallButton = styled('button')({
    boxShadow: 'none',
    padding: "0.813rem 2rem",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
    textTransform: 'none',
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.5,
    backgroundColor: '#E0FB92',
    color: '#3418D8',
    fontFamily: [
        'Source Sans Pro'
    ].join(','),
    '&:hover': {
        backgroundColor: '#CEF953',
        boxShadow: 'none',
        outline: 'none',
        textDecoration: 'none',
        color: "#141414",
        border: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#A7DD08',
        outline: 'none',
        textDecoration: 'none',
        color: "#141414",
    },
    '&:focus': {
        boxShadow: 'none',
        backgroundColor: '#A7DD08',
        color: "#141414",
        outline: 'none',
        textDecoration: 'none',
    },
});

export const Link = styled('a')({
    outline: "none",
    textDecoration: "none",
    color: '#3418D8',
    fontFamily: [
        'Source Sans Pro'
    ].join(','),
    '&:hover': {
        boxShadow: 'none',
        color: '#3418D8',
        outline: 'none',
        textDecoration: 'none',
        border: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        outline: 'none',
        color: '#3418D8',
        textDecoration: 'none',
    },
    '&:focus': {
        boxShadow: 'none',
        outline: 'none',
        color: '#3418D8',
        textDecoration: 'none',
    },
});

export function LimeSmallButton({text, url, size}) {
    return (
        <ReactLimeSmallButton variant="contained" size={size}>
            <Link href={url} target="_blank">{text}</Link>
        </ReactLimeSmallButton>
    );
}

