import * as React from "react";


export default function TitleHero({ contentObj }) {
    return (
        <div className="hero_content-wrapper padding-vertical padding-large">
            <div className="title_wrapper max-width-large">
                <div className="center-content z-index-1">
                    <div className="text-cut-off">
                        <div>
                            <div className="heading-style-h4 text-color-primary text-left-mobile">
                                {contentObj.titleObj.h1}
                            </div>
                        </div>
                    </div>
                    <div className="margin-vertical">
                        <div className="text-cut-off">
                            <h1 className="heading-style-h1 text-left-mobile">
                                {contentObj.titleObj.h2} <br />
                            </h1>
                            <p className="text-color-primary heading-style-h1">
                                {contentObj.titleObj.h3}
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${
                            contentObj.appBtnsVisible ? "" : "hide"
                        }  button-group-hero  margin-top margin-large spread max-width-full-mobile-landscape`}
                    >
                        <div
                            className="button-store background-color-black"
                        ><a
                            target="_blank"
                            rel="noreferrer"
                            href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"

                        >
                            <img
                                src={'../../assets/images/common/DW-Apple.svg' || ''}
                                alt="Apple"
                                loading="lazy"
                            ></img>
                        </a>
                        </div>
                        <div
                            className="button-store background-color-black"
                        ><a
                            target="_blank"
                            rel="noreferrer"
                            href="https://play.google.com/store/apps/details?id=io.changex.app"
                        >
                            <img
                                src={'/../../assets/images/common/DW-Google.svg' || ''}
                                alt="Google"
                                loading="lazy"
                            ></img>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
