import * as React from "react"
import {lazy} from "react";

import InnerHero from "../components/Heroes/InnerHero";
import DefiToken from "../components/Defi/DefiToken";
import Tokenomics from "../components/SectionToken/Tokenomics";
import Seo from "../components/SEO/Seo";
import Faq from "../components/Faq/SectionFaq";


import {faqTokenContent} from "../components/Faq/faqItems";
import {
    heroObj, tokenPageDeFiData,
    tokenPageTokenomicsData,
} from "../components/SectionToken/tokenItems";

const Layout = lazy(() => import('../components/Layout/Layout'));

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
                <Faq
                    background={"background-color-off-white"}
                    title={"FAQ"}
                    faqContent={faqTokenContent}
                />
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
