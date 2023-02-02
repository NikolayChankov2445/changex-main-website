import * as React from "react"

import InnerHero from "../components/Heroes/InnerHero";
import SectionAdvantages from "../components/SectionAdvantages/SectionAdvantages";
import SliderSection from "../components/SectionSlider/SectionSlider";

import {
    heroObj,
    advantages,
    responsiveWalletPageSlider,
    sliderDataWalletPage,
    textData,
    cardContent
} from "../components/SectionWallet/walletItems";
import SectionCard from "../components/SectionCard/SectionCard";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/Seo";
import SwapCrypto from "../components/SwapCrypto/SwapCrypto";

const swapCryptoTitleObj = {
    titleObj: {
        h1: "",
        h2: "Swap Crypto",
        h3: "Get your hands on a variety of tokens on multiple blockchains, including HydraChain and Ethereum, with Binance Smart Chain and more coming soon.",
    },
    text: "",
    appBtnsVisible: false,
    buttonUrl: "/supported",
    scrollBtnText: "View All",
    backgroundImage: "",
    class: "walletPage",
};


const WalletPage = () => {
    return (
        <Layout>
            <InnerHero heroObj={heroObj} />
            <section id="wallet" >
                <SectionAdvantages
                    pageClass={heroObj.class}
                    classGrid={"card-grid-wallet"}
                    title={"The DeFi Wallet That Changes Everything"}
                    advantages={advantages}
                />
                <SwapCrypto titleObj={swapCryptoTitleObj} />
                <SliderSection
                    textData={textData}
                    sliderData={sliderDataWalletPage}
                    responsiveSliderData={responsiveWalletPageSlider}
                    menuTabs={null}
                />
                <SectionCard cardContent={ cardContent }  />
            </section>
        </Layout>
    )
}

export default WalletPage

export const Head = () => (
    <>
        <Seo  description={heroObj.titleObj.h3}
              title={heroObj.titleObj.h2}
              imageAlt="Changex Wallet" />
    </>
)
