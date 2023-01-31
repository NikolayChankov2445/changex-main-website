import * as React from "react"

import SupportedTokensTable from "../components/SectionToken/SupportedTokensTable";


import {titleObj, tokenPageDeFiData} from "../components/SectionToken/tokenItems";
import {PurpleButtonRoute} from "../components/Buttons/PurpleRoute";
import Layout from "../components/Layout/Layout";
import Seo from "../components/SEO/Seo";

const Supported = () => {
    return (
        <Layout>
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
        </Layout>
    )
}

export default Supported

export const Head = () => (
    <>
        <Seo  description={tokenPageDeFiData.head2}
              title={tokenPageDeFiData.head}
              imageAlt="Supported Changex Tokens"/>
    </>
)
