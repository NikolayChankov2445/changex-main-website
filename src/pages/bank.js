import * as React from "react"
import {lazy} from "react";


import InnerHero from "../components/Heroes/InnerHero";
import SectionSlider from "../components/SectionSlider/SectionSlider";
import SectionCard from "../components/SectionCard/SectionCard";
import ThoughtWall from "../components/Common/ThoughtWall";
import SectionCta from "../components/SectionCta/SectionCta";
import Faq from "../components/Faq/SectionFaq";
import Seo from "../components/SEO/Seo";

import {
    responsiveSliderData,
    sliderData,
    heroObj,
    sliderTextData,
    cardContent,
    thoughtObj,
} from "../components/SectionBank/bankItems";

import {faqBankContent} from "../components/Faq/faqItems";

const Layout = lazy(() => import('../components/Layout/Layout'));

const BankPage = () => {
    return (
        <Layout>
            <InnerHero heroObj={heroObj} />
            <section id="changex_section_bank" className="section_bank">
                <SectionSlider
                    textData={sliderTextData}
                    sliderData={sliderData}
                    responsiveSliderData={responsiveSliderData}
                    menuTabs={null}
                />
                <SectionCard cardContent={cardContent} />
                <ThoughtWall thoughtObj={thoughtObj} />
                <Faq
                    background={"background-color-black"}
                    title={"Banking FAQ"}
                    faqContent={faqBankContent}
                />
                <SectionCta />
            </section>
        </Layout>
    )
}

export default BankPage

export const Head = () => (
    <>
        <Seo description={heroObj.titleObj.h3}
             title={heroObj.titleObj.h2}
             imageAlt="Changex Bank"/>
    </>
)
