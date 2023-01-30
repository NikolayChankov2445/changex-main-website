import * as React from "react";
import styled from "styled-components";

export const ReactPurpleButton = styled('button')({
    boxShadow: 'none',
    padding: "13px 32px",
    borderRadius: "8px",
    textTransform: 'none',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.5,
    backgroundColor: '#8366F4',
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

export function PurpleButton({text,url}) {
    return (
        <ReactPurpleButton href={url} variant="contained" size="large">
            {text}
        </ReactPurpleButton>
    );
}
