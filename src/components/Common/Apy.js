import * as React from 'react'
import {useContext} from "react";
import styled from "styled-components";
import { ApyContext } from "../Context/ApyContext";

const Wrapper = styled.div`
    margin: auto 30px
`

const ApyBtn = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: large;
`

const ApySpan = styled.span`
  font-weight: bold;
  font-size: 18px;
  font-family: var(--font-paragraph);
  color: var(--themeBlueBackgroundColor);
  text-decoration: none;
  margin-left: 3px;
`

export default function Apy() {
    const apyContext = useContext(ApyContext);

    return (
        <Wrapper className="priceApyWrapper">
            <ApyBtn id="changexApy">
                <strong>APY:</strong> <ApySpan>{apyContext}%</ApySpan>
            </ApyBtn>
        </Wrapper>
    )
}
