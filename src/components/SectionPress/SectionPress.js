import * as React from "react";
import { logos } from "./pressItems";

export default function SectionPress() {
    return (
        <section className="section_press ">
            <div className="padding-global">
                <div className="container-large">
                    <div className="slide-from-bottom grid-1">
                        <h3 className="heading-style-h5 text-color-black margin-bottom text-align-center margin-medium">
                            As seen on
                        </h3>
                        <div className="logo-group r-marquee">
                            <div className="logos-wrapper r-marquee-wrapper-left">
                                {logos.map((logo, index) => {
                                    return (
                                        <a
                                            key={index}
                                            href={logo.href}
                                            id={logo.name}
                                            className="logo-link w-inline-block"
                                        >
                                            <img
                                                src={logo.src  || ''}
                                                loading="lazy"
                                                width="250"
                                                alt={logo.name}
                                                className="logo-max-width-200"
                                            ></img>
                                        </a>
                                    );
                                })}
                            </div>
                            <div className="logos-wrapper r-marquee-wrapper-left">
                                {logos.map((logo, index) => {
                                    return (
                                        <a
                                            key={index}
                                            href={logo.href}
                                            target="_blank"
                                            id={logo.name}
                                            className="logo-link w-inline-block"
                                        >
                                            <img
                                                src={logo.src || ''}
                                                loading="lazy"
                                                width="250"
                                                alt={logo.name}
                                                className="logo-max-width-200"
                                            ></img>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
