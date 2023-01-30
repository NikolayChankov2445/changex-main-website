import * as React from "react";
import styled from "styled-components";

export const ReactPrimaryButton = styled('button')({
    boxShadow: 'none',
    borderRadius: "8px",
    padding: "13px 32px",
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

export function PrimaryButton({text,url, icon}) {
    return (
        <ReactPrimaryButton href={url} variant="contained" size="large" endIcon={icon}>
            {text}
        </ReactPrimaryButton>
    );
}
