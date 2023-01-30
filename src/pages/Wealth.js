import * as React from "react"

import InnerHero from "../components/Heroes/InnerHero";
import SliderSection from "../components/SectionSlider/SectionSlider";
import Features from "../components/Features/Features";

import {
    responsiveSliderData,
    sliderDataWealthPage,
    heroObj,
    textData,
    featureContent,
    featureContent2
} from "../components/SectionWealth/wealthItems";

const WealthPage = () => {
    return (
        <>
            <InnerHero heroObj={heroObj} />
            <section id="wealth" className="section_invest">
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
                <Features
                    background={"background-color-off-pink"}
                    content={featureContent2}
                />
            </section>
        </>
    )
}

export default WealthPage

export const Head = () => <title>Wealth Page</title>
