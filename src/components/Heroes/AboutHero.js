import * as React from "react";
import Quote from "../Common/Quote";


export default function AboutHero({ heroObj }) {
    return (
        <section id="inner-hero">
            <div className="padding-global-top-sides relative">
                <div className="container-large ">
                    <div
                        id="inner-hero-title"
                        className="hero_about_content-wrapper padding-vertical padding-small"
                    >
                        <div className="title_wrapper_hero_about max-width-slarge">
                            <div className="z-index-1">
                                <div className="">
                                    <h5 className="heading-style-h5  text-color-primary text-left-mobile">
                                        {heroObj.titleObj.h1}
                                    </h5>
                                </div>
                                <div className="margin-vertical margin-small ">
                                    <div className="">
                                        <h2 className="heading-style-h2 text-left-mobile">
                                            {heroObj.titleObj.h2}
                                        </h2>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-weight-normal">
                                        {heroObj.titleObj.h3}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${heroObj.quoteObject.img ? "" : "hide"}`}>
                        <Quote quoteObject={heroObj.quoteObject} />
                    </div>
                    <div className="margin-top-small">
                        <div className="text-weight-normal">
                            {heroObj.titleObj.h4}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
