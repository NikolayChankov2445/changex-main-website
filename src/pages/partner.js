import * as React from "react"
import {lazy} from "react";
import {
    becomeAPartner,
    becomeAPartnerForm,
    featureContent,
    heroPartnerObj,
} from "../components/SectionPartners/partnersItems";


import AboutHero from "../components/Heroes/AboutHero";
import PerksSlide from "../components/Perks/PerksSlide";
import Seo from "../components/SEO/Seo";
import Contact from "../components/Contact/Contact";
import CommingSoon from "../components/Features/CommingSoon";
const Layout = lazy(() => import('../components/Layout/Layout'));

const PartnerPage = () => {
    return (
        <Layout>
            <AboutHero  heroObj={heroPartnerObj} />
            <PerksSlide perksObj={heroPartnerObj.perks} />
            <CommingSoon
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
