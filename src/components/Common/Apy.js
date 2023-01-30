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

export default function Apy() {
    const apyContext = useContext(ApyContext);

    return (
        <Wrapper className="priceApyWrapper">
            <ApyBtn id="changexApy">
                APY: {apyContext}%
            </ApyBtn>
        </Wrapper>
    )
}
