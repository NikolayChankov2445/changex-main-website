import * as React from "react"
import InnerHero from "../components/Heroes/InnerHero";

import { faqBankContent } from "../components/Faq/faqItems";
import {
    heroObj, tokenPageDeFiData,
    tokenPageTokenomicsData,
} from "../components/SectionToken/tokenItems";
import DefiToken from "../components/Defi/DefiToken";
import Tokenomics from "../components/SectionToken/Tokenomics";


const TokenPage = () => {
    return (
        <>
            <InnerHero heroObj={heroObj} />
            <DefiToken background={'background-color-black'} tokenData={tokenPageDeFiData } />
            <Tokenomics
                background={"background-color-black"}
                tokenData={tokenPageTokenomicsData}
            />
            <section id="token-page">

            </section>
        </>
    )
}

export default TokenPage

export const Head = () => <title>Token Changex</title>
