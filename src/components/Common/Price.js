import * as React from 'react'
import {useState} from "react";
import styled from "styled-components";
import {useContext, useEffect} from "react";
import { PricesContext } from "../Context/PriceContext";


const Wrapper = styled.div`
    margin: auto 30px
`

const PriceBtn = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: large;
`

export default function Price() {
    const [price, setPrice] = useState('');
    const coinsContext = useContext(PricesContext);

    useEffect(()=> {
        const changePrice = coinsContext.filter(a => a.id === 'changex');

        if (changePrice.length > 0) {
            setPrice(changePrice[0].current_price.toFixed(4));
        }
    },[coinsContext])

    return (
        <Wrapper className="priceApyWrapper">
            <PriceBtn id="changexPrice">
                Price: ${price}
            </PriceBtn>
        </Wrapper>
    )
}
