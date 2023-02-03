import * as React from 'react'
import styled from "styled-components";
import Price from "../Common/Price";
import Apy from "../Common/Apy";
import DropdownBtn from "../Buttons/DropdownBtn";

const BorderSpan = styled.span`
    background-color: #4c4c4c;
    width: 1px;
    height: 60px;
    opacity: 0.5
`

const dropDownObj = [
    {
        link: 'https://app.uniswap.org/#/swap?inputCurrency=&outputCurrency=0x7051faed0775f664a0286af4f75ef5ed74e02754',
        image: '/assets/images/social/uniswapImg.png',
        title: 'Uniswap'
    },
    {
        link: 'https://otc.mexc.com/en-US/fastTransaction',
        image: '/assets/images/social/mexcImage.png',
        title: 'Mexc'
    },
    {
        link: 'https://hydradex.org/#/swap',
        image: '/assets/images/social/hydraImg.png',
        title: 'Hydra Dex'
    }
]

export default function PriceApyBtns({ withDropdown }) {

    return (
        <div className="infoInnerWrapper grid-2">
            <div className="flex">
                <Price />
                <BorderSpan className="borderSpan"/>
                <Apy />
            </div>
            {withDropdown &&
                <DropdownBtn dropDownData={dropDownObj} />
            }
        </div>
    )
}
