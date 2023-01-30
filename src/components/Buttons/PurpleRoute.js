import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const PurpleButtonRoutes = styled('button')({
    boxShadow: 'none',
    borderRadius: "8px",
    padding: "13px 32px",
    textTransform: 'none',
    fontSize: 24,
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
        color: "#ffffff",
    },
});

export function PurpleButtonRoute({text,url, size}) {
    return (
        <PurpleButtonRoutes variant="contained" size={size}>
            <Link className="routesBtn" to={url  || ''}>
                {text}
            </Link>
        </PurpleButtonRoutes>
    );
}
