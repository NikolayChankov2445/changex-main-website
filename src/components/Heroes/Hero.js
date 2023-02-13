import * as React from "react"
import TitleHero from "./TitleHero";
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Hero({ heroObj }) {
    return (
        <section id="hero" className="section_hero">
            <div className="padding-global">
                <div className="container-hero">
                    <TitleHero contentObj={heroObj} />
                    <video className="videoTag" autoPlay loop muted>
                        <source src="/assets/images/common/Hero_Video_2023.mp4" type="video/mp4" />
                    </video>
                    <div className="hero_text-wrapper">
                        <p
                            className="
                            max-width-large
                            align-center paragraph24"
                        >
                            {heroObj.titleObj.h4}&nbsp;
                            <button onClick={() => scrollTo('#card')} className="transparent text-style-link paragraph24">
                                {heroObj.titleObj.titleWithLink}
                            </button>
                        </p>
                        <div className="button is-qr w-inline-block">
                            <img
                                src="/assets/images/common/download-qr.svg"
                                loading="lazy"
                                width="75"
                                alt="Changex QR code"
                                className="qr-small-cta"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
