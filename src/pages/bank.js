import * as React from "react"

import {
    responsiveSliderData,
    sliderData,
    heroObj,
    sliderTextData,
    cardContent,
    thoughtObj,
} from "../components/SectionBank/bankItems";
import InnerHero from "../components/Heroes/InnerHero";
import SectionSlider from "../components/SectionSlider/SectionSlider";
import SectionCard from "../components/SectionCard/SectionCard";
import ThoughtWall from "../components/Common/ThoughtWall";
import SectionCta from "../components/SectionCta/SectionCta";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/Seo";


const BankPage = () => {
    return (
        <Layout>
            <InnerHero heroObj={heroObj} />
            <section id="bank" className="section_bank">
                <SectionSlider
                    textData={sliderTextData}
                    sliderData={sliderData}
                    responsiveSliderData={responsiveSliderData}
                    menuTabs={null}
                />
                <SectionCard cardContent={cardContent} />
                <ThoughtWall thoughtObj={thoughtObj} />
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
