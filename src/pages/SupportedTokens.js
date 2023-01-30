import * as React from "react"

import SupportedTokensTable from "../components/SectionToken/SupportedTokensTable";


import { titleObj } from "../components/SectionToken/tokenItems";
import {PurpleButtonRoute} from "../components/Buttons/PurpleRoute";

const SupportedTokens = () => {
    return (
        <>
            <div className="padding-global">
                <div className="container-large">
                    <div className="margin-auto-large">
                        <div className="title_wrapper_hero max-width-large">
                            <div className="center-content z-index-1">
                                <div className="margin-vertical margin-small ">
                                    <div className="">
                                        <h1 className="heading-style-h1 text-left-mobile">
                                            {titleObj.titleObj.h2}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SupportedTokensTable />
                    <div className="background-color-blue quoteImagePartner">
                        <div className="quoteTextPatner padding-global">
                            <h3 className="heading-style-h3">
                                {" "}
                                Want to get your project listed?
                            </h3>
                            <div className="spacer-middle"></div>
                            <div>
                                <PurpleButtonRoute
                                    text={"Become A Partner"}
                                    url={"/partner"}
                                    size={"small"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupportedTokens

export const Head = () => <title>Changex Supported Tokens</title>
