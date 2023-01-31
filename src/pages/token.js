import * as React from "react"
import InnerHero from "../components/Heroes/InnerHero";

import { faqBankContent } from "../components/Faq/faqItems";
import {
    heroObj, tokenPageDeFiData,
    tokenPageTokenomicsData,
} from "../components/SectionToken/tokenItems";
import DefiToken from "../components/Defi/DefiToken";
import Tokenomics from "../components/SectionToken/Tokenomics";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/Seo";

const TokenPage = () => {
    return (
        <Layout>
            <InnerHero heroObj={heroObj} />
            <DefiToken background={'background-color-black'} tokenData={tokenPageDeFiData } />
            <Tokenomics
                background={"background-color-black"}
                tokenData={tokenPageTokenomicsData}
            />
            <section id="token-page">

            </section>
        </Layout>
    )
}

export default TokenPage

export const Head = () => (
    <>
        <Seo  description={heroObj.titleObj.head2}
              title={heroObj.titleObj.head3}
              imageAlt="CHANGE Token"/>
    </>
)
