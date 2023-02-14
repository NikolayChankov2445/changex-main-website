import * as React from "react";
import { logosParners } from "./partnersItems";

export default function SectionPartners() {
    return (
        <section className="section_partners">
            <div className="padding-global">
                <div className="container-large">
                    <div className="grid-1">
                        <h3 className="heading-style-h5 text-color-black margin-bottom margin-medium text-align-center">
                            Revolutionizing Personal Finance One Community At A Time.
                        </h3>
                        <div className="logo-group r-marquee">
                            <div className="logos-wrapper r-marquee-wrapper-left">
                                {logosParners.map((logo, index) => {
                                    return (
                                        <a
                                            key={index}
                                            href={logo.href}
                                            id={`changex_${logo.id}`}
                                            className="logo-link w-inline-block"
                                        >
                                            <img
                                                src={logo.src || ''}
                                                loading="lazy"
                                                width="150"
                                                alt={logo.name}
                                                className="logo-max-width-200"
                                            ></img>
                                        </a>
                                    );
                                })}
                            </div>
                            <div className="logos-wrapper r-marquee-wrapper-left">
                                {logosParners.map((logo, index) => {
                                    return (
                                        <a
                                            key={index}
                                            id={logo.id}
                                            href={logo.href}
                                            className="logo-link w-inline-block">
                                            <img
                                                src={logo.src || ''}
                                                loading="lazy"
                                                width="150"
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
