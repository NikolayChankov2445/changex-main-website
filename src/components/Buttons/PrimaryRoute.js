import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const PrimaryButtonRoutes = styled('button')({
    boxShadow: 'none',
    borderRadius: "1rem",
    padding: "0.813rem 2rem",
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
