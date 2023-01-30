import * as React from "react"


import {
    becomeAPartner,
    becomeAPartnerForm,
    featureContent,
    heroPartnerObj,
} from "../components/SectionPartners/partnersItems";
import AboutHero from "../components/Heroes/AboutHero";
import PerksSlide from "../components/Perks/PerksSlide";
import Features from "../components/Features/Features";

const PartnerPage = () => {
    return (
        <>
            <AboutHero  heroObj={heroPartnerObj} />
            <PerksSlide perksObj={heroPartnerObj.perks} />
            <Features
                background={"background-color-off-pink"}
                content={featureContent}
            />
        </>
    )
}

export default PartnerPage

export const Head = () => <title>Partner Page</title>
