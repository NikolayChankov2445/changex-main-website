import * as React from "react";
import { bankContent } from "./bankItems";
import {PrimaryButton} from "../Buttons/Primary";


export default function SectionBank() {
    return (
        <section id="bank-section" className="section_bank">
            <div className="padding-global">
                <div className="container-large">
                    <div>
                        <div className="bank_wrapper margin-bottom">
                            <div
                                className="bank_wrapper-left z-index-1 margin-vertical"
                            >
                                <div className="bank-image-comming-soon">COMMING SOON</div>
                                <h2 className="heading-style-h2 slide-from-bottom">
                                    {bankContent.head2}
                                </h2>
                                <div className="spacer-small"></div>
                                <p className="text-color-darkgrey margin-bottom-small text-size-medium margin-bottom slide-from-bottom">
                                    {bankContent.paragraph}
                                </p>
                                <PrimaryButton text={'Learn More'} url={bankContent.firebasePage} />
                            </div>
                            <div className="bank_wrapper-right image-holder bank-image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
