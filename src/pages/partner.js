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
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/Seo";
import Contact from "../components/Contact/Contact";

const PartnerPage = () => {
    return (
        <Layout>
            <AboutHero  heroObj={heroPartnerObj} />
            <PerksSlide perksObj={heroPartnerObj.perks} />
            <Features
                background={"background-color-off-pink"}
                content={featureContent}
            />
            <Contact
                content={becomeAPartner}
                formContent={becomeAPartnerForm}
                background={"becomePartner"}
            />
        </Layout>
    )
}

export default PartnerPage

export const Head = () => (
    <>
        <Seo description={heroPartnerObj.titleObj.h3}
             title={heroPartnerObj.titleObj.h2}
             imageAlt="Changex- Become a Partner"/>
    </>
)
