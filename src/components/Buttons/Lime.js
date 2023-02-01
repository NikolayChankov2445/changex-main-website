import * as React from "react";
import styled from "styled-components";

export const ReactLimeButton = styled('button')({
    boxShadow: 'none',
    padding: "13px 32px",
    borderRadius: "8px",
    marginBottom: "16px",
    textTransform: 'none',
    fontSize: "24px",
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


export function LimeButton({text, url, size}) {
    return (
        <ReactLimeButton href={url} variant="contained" size={size}>
            {text}
        </ReactLimeButton>
    );
}

