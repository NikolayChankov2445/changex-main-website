import * as React from "react";
import styled from "styled-components";

export const ReactPinkSmallButton = styled('button')({
    boxShadow: 'none',
    padding: "13px 32px",
    borderRadius: "8px",
    textTransform: 'none',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1.5,
    backgroundColor: '#EBE8FC',
    color: '#3418D8',
    fontFamily: [
        'Source Sans Pro'
    ].join(','),
    '&:hover': {
        backgroundColor: '#AD9AF7',
        boxShadow: 'none',
        color: "#3418D8",
        textDecoration: 'none',
        border: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#5540AE',
        outline: 'none',
        textDecoration: 'none',
        color: "#3418D8",
    },
    '&:focus': {
        boxShadow: 'none',
        backgroundColor: '#5540AE',
        outline: 'none',
        textDecoration: 'none',
        color: "#3418D8",
    },
});

export function PinkSmallButton({text, url, size}) {
    return (
        <ReactPinkSmallButton href={url} variant="contained" size={size}>
            {text}
        </ReactPinkSmallButton>
    );
}
