import * as React from "react";
import SliderSection from "../SectionSlider/SectionSlider";

import {
    menuTabs,
    sliderDataLandingPage,
    responsiveSliderData,
    textDataWealthSection,
} from "./wealthItems";

export default function SectionWealth() {
    return (
        <section id="wealth-section" className="section_invest">
            <SliderSection
                textData={textDataWealthSection}
                sliderData={sliderDataLandingPage}
                responsiveSliderData={responsiveSliderData}
                menuTabs={menuTabs}
            />
        </section>
    );
}
