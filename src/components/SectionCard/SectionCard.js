import * as React from "react";
import { useState } from "react";
import { cardItems } from "./sectionCardItems";
import { waitlistItems } from "../SectionWaitlist/waitlistItems";
import {GATSBY_SENDGRID_TOKEN, GATSBY_SENDGRID_URL} from "../../constants/config";
import SectionAdvantages from "../SectionAdvantages/SectionAdvantages";

export default function SectionCard({ cardContent }) {
    const [isShown, setIsShown] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [formData, setFormData] = useState("");

    const HandleSubmit = (event) => {
        if (isValidEmail(formData)) {
            event.preventDefault();

            fetch(GATSBY_SENDGRID_URL, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData,
                    first_name: "",
                    last_name: "",
                    token: GATSBY_SENDGRID_TOKEN,
                }),
            })
                .then((res) => setIsShown((current) => !current))
                .catch((err) => {
                    setHasError(true);
                    throw new Error(err);
                });
        } else {
        }
    };

    const HandleChange = (event) => {
        event.preventDefault();
        setFormData(event.target.value);
    };

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    return (
        <section
            id="card"
            className={`${
                cardContent.page === "Wallet" ? "section_card_wallet" : "section_card"
            } overflow-hidden`}
        >
            <div
                className={`${
                    cardContent.page === "Wallet"
                        ? "padding-global-sides"
                        : "padding-global"
                }`}
            >
                <div className="container-large">
                    <div>
                        <div className="card_wrapper">
                            <div className="card_wrapper-right">
                                <div className="image-holder card-image">
                                    <img
                                        src="/assets/images/card/cards-img.png"
                                        loading="lazy"
                                        alt="changex cards"
                                        sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw"
                                        srcSet="/assets/images/card/cards-img-p-500.png 500w, /assets/images/card/cards-img.png 729w"
                                        className="image-2"
                                    ></img>
                                </div>
                            </div>
                            <div
                                className="bank_wrapper-left form z-index-1 margin-vertical margin-large padding-horizontal padding-medium"
                            >
                                <div className="max-width-large text-left">
                                    <h2 className="heading-style-h2 margin-bottom">
                                        {cardContent.head1}
                                        <br /> {cardContent.head2} <br />
                                    </h2>
                                    <h2 className="heading-style-h2 debitCard">
                                        {" "}
                                        {cardContent.head3}{" "}
                                    </h2>
                                    <p className="paragraph-style">{cardContent.paragraph}</p>
                                    <h4 className="heading-style-h4">{waitlistItems.head1}</h4>
                                    <div className="form-wrapper">
                                        {isShown && (
                                            <div
                                                className="sendgrid-subscription-widget widget-2368"
                                                data-emailerror="Please enter a valid email address"
                                            >
                                                <form
                                                    onSubmit={HandleSubmit}
                                                    data-token="0719662e9bb0cc2768bc17f2c5cfb745"
                                                    id="email-form"
                                                    name="email-form"
                                                    data-name="Email Form"
                                                    method="get"
                                                    className="form"
                                                >
                                                    <input
                                                        type="email"
                                                        className="email-field w-input"
                                                        maxLength="256"
                                                        name="email"
                                                        placeholder="Enter your email"
                                                        onChange={HandleChange}
                                                        value={formData}
                                                        required=""
                                                    ></input>
                                                    <input
                                                        type="submit"
                                                        value="Sign up"
                                                        data-wait="Please wait..."
                                                        className="email-submit w-button"
                                                    ></input>
                                                </form>
                                            </div>
                                        )}
                                        {!isShown && (
                                            <div className="w-form-done">
                                                {waitlistItems.received}
                                            </div>
                                        )}

                                        {hasError && (
                                            <div className="w-form-fail">
                                                <div>{waitlistItems.error}</div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-size-small">
                                        By subscribing you agree to ChangeX&nbsp;
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={waitlistItems.terms}
                                            className="link"
                                        >
                                            Terms of Service
                                        </a>
                                        &nbsp; and provide consent to receive marketing
                                        communication and emails for special offers
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="margin-large"></div>
                        <div
                            className={`${
                                cardContent.page === "Home" ? "" : "hide"
                            } margin-top-large`}
                        >
                            <SectionAdvantages
                                pageClass={'cardPage'}
                                classGrid={"card-grid"}
                                title={"More Than A card - It’s Freedom"}
                                advantages={cardItems}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
