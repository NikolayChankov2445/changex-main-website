import * as React from "react"
import {lazy} from "react";

import InnerHero from "../components/Heroes/InnerHero";
import SliderSection from "../components/SectionSlider/SectionSlider";
import Features from "../components/Features/Features";
import Faq from "../components/Faq/SectionFaq";
import Seo from "../components/SEO/Seo";


import {
    responsiveSliderData,
    sliderDataWealthPage,
    heroObj,
    textData,
    featureContent,
    featureContent2
} from "../components/SectionWealth/wealthItems";

import {faqWealthContent} from "../components/Faq/faqItems";
import CommingSoon from "../components/Features/CommingSoon";
const Layout = lazy(() => import('../components/Layout/Layout'));

const WealthPage = () => {
    return (
        <Layout>
            <InnerHero heroObj={heroObj} />
            <section className="section_invest">
                <SliderSection
                    textData={textData}
                    sliderData={sliderDataWealthPage}
                    responsiveSliderData={responsiveSliderData}
                    menuTabs={null}
                />
                <Features
                    background={"background-color-blue"}
                    content={featureContent}
                />
                <CommingSoon
                    background={"background-color-off-pink"}
                    content={featureContent2}
                />
                <Faq
                    background={"background-color-off-white"}
                    title={"Wealth FAQ"}
                    faqContent={faqWealthContent}
                />
            </section>
        </Layout>
    )
}

export default WealthPage

export const Head = () => (
    <>
        <Seo description={heroObj.titleObj.h3}
             title={heroObj.titleObj.h2}
             imageAlt="Changex Wealth" />
    </>
)
