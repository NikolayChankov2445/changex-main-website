import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const PrimaryButtonRoutes = styled('button')({
    boxShadow: 'none',
    borderRadius: "8px",
    padding: "13px 32px",
    textTransform: 'none',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.5,
    color: '#ffffff',
    backgroundColor: '#3418D8',
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

export function PrimaryButtonRoute({text,url}) {
    return (
        <PrimaryButtonRoutes variant="contained" size="large">
            <Link className="routesBtn" to={url || ''}>
                {text}
            </Link>
        </PrimaryButtonRoutes>
    );
}
