import * as React from "react";

import { PrimaryButtonRoute } from "../Buttons/PrimaryRoute";
import TokensCrawl from "../Crawl/TokensCrawl";

export default function SwapCrypto({ titleObj }) {
    return (
        <div id="swap_crypto" className="swap_crypto">
            <div className="padding-global">
                <div className="container-large">
                    <div className="hero_content-wrapper padding-vertical padding-large">
                        <div className="title_wrapper_hero max-width-large">
                            <div className="center-content z-index-1">
                                <div className="margin-vertical margin-small ">
                                    <div className="">
                                        <h1 className="heading-style-h1 text-desktop-mobile">
                                            {titleObj.titleObj.h2}
                                        </h1>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-desktop-mobile text-weight-normal ">
                                        {titleObj.titleObj.h3}
                                    </div>
                                </div>
                                <div
                                    className={`${
                                        titleObj.scrollBtnText && titleObj.class !== "tokenPage"
                                            ? ""
                                            : "hide"
                                    } tabs-menu goToLink w-tab-menu`}
                                >
                                    <PrimaryButtonRoute text={titleObj.scrollBtnText} url={titleObj.buttonUrl}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="padding-bottom-top">
                <TokensCrawl crawlDirection={"r-marquee-wrapper-tokens-left"} />
                <div className="spacer"></div>
                <TokensCrawl crawlDirection={"r-marquee-wrapper-tokens-right"} />
            </div>
        </div>
    );
}
