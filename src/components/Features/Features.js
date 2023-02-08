import * as React from "react";
import { LimeButton } from "../Buttons/Lime";
import { PrimaryButton } from "../Buttons/Primary";

export default function Features({ background, content }) {
    return (
        <section id="feature" className="section_feature">
            <div className={background}>
                <div className="padding-global">
                    <div className="container-large">
                        <div className="features">
                            <h2 className="heading-style-h2">{content.head}</h2>
                            {content.feature.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="container-feature grid-2"
                                    >
                                        <div
                                            data-current="Tabs"
                                            className="tabs tabs-wealth-feature w-tabs"
                                        >
                                            <div className="max-width-small-slider">
                                                <div
                                                    className={`${
                                                        item.commingSoon ? "" : "hide"
                                                    } bank-image-comming-soon`}
                                                >
                                                    {item.offerText}
                                                </div>
                                                <div className="money">
                                                    <h2 className="heading-style-h2 margin-bottom margin-small">
                                                        {item.h1}&nbsp;
                                                        <span
                                                            className={`${
                                                                item.commingSoon ? "is-blue" : "is-lime"
                                                            }  heading-style-h2`}
                                                        >
                                                                {item.h2}
                                                            </span>
                                                    </h2>
                                                    <p
                                                        className={`${
                                                            item.commingSoon ? "" : "text-color-grey"
                                                        } text-size-xlarge `}
                                                    >
                                                        {item.h3}
                                                    </p>
                                                    <p className="text-size-xlarge text-color-grey margin-bottom-small">
                                                        {item.h4}
                                                    </p>
                                                </div>
                                                <div className={`${background === "background-color-blue" ? "" : "hide"}`}>
                                                    <LimeButton text={item.buttonTxt} url={item.buttonUrl} icon={''} />
                                                </div>
                                                <div className={`${background === "background-color-off-pink" ? "" : "hide"}`}>
                                                    <PrimaryButton text={item.buttonTxt} url={item.buttonUrl} icon={''} />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                item.alignImage === "left"
                                                    ? "wrapper-left-image rowReverse"
                                                    : "wallet_wrapper-right"
                                            }
                                        >
                                            <img alt={item.h2} className={item.imageClass} src={item.imageUrl  || ''} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
