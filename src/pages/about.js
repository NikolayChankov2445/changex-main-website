import * as React from "react"

import AboutHero from "../components/Heroes/AboutHero";
import Perks from "../components/Perks/Perks";
import ThoughtWall from "../components/Common/ThoughtWall";
import Team from "../components/SectionTeam/Team";
import Roadmap from "../components/SectionRoadmap/Roadmap";
import SectionCta from "../components/SectionCta/SectionCta";

import { heroObj, roadMapAboutData } from "../components/Common/aboutItems";
import { teamAdvisorsData, teamExpertsData, titleAdvisorsObj, titleExpertsObj } from "../components/SectionTeam/teamItems";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/Seo";

const thoughtObj = {
    page: 'About',
    title: '',
    image: '/assets/images/about/thought-catalog.png',
    className: "aboutPage",
    link: 'Change starts now.',
    p1:  'We leave out the tech and the complications, placing a formidable suite of financial tools safely in your pocket. All this in pursuit of better finance, and thus - better life.',
    p2:  'Go and make the most of it - we’ll be with you every step of the way.'
}

const AboutPage = () => {
    return (
        <Layout>
            <AboutHero heroObj={ heroObj }/>
            <div className="padding-global-top">
                <div className="container-large ">
                    <Perks perksArray={heroObj.perks}/>
                </div>
            </div>
            <section id="about">
                <ThoughtWall thoughtObj={ thoughtObj }/>
                <Team titleObj={titleExpertsObj} teamData={teamExpertsData} paddingClass={'padding-global'}/>
                <Team titleObj={titleAdvisorsObj} teamData={teamAdvisorsData} paddingClass={'padding-global-bottom-sides'}/>
                <Roadmap background={'background-color-black'} roadmapData={roadMapAboutData}/>
                <SectionCta />
            </section>
        </Layout>
    )
}

export default AboutPage

export const Head = () => (
    <>
        <Seo description={heroObj.titleObj.h3}
             title={heroObj.titleObj.h2}
             imageAlt="Changex About"/>
    </>
)
