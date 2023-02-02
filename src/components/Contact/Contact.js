import * as React from "react";
import { useState, useRef } from "react";
import isURL from "validator/es/lib/isURL";
import * as emailjs from "@emailjs/browser";

import {
    GATSBY_EMAILJS_PUBLICK_KEY,
    GATSBY_EMAILJS_SERVICE_ID,
    GATSBY_EMAILJS_TEMPLATE_ID
} from "../../constants/config";
import {Form} from "react-bootstrap";
import {PurpleButton} from "../Buttons/Purple";

export default function Contact({ content, formContent, background }) {
    const formRef = useRef();

    const [organizationName, setOrganizationName] = useState("");
    const [communityLink, setCommunityLink] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");
    const [information, setInfomration] = useState("");
    const [isSent, setSent] = useState(false);
    const [checked, setChecked] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [isWebsiteLinkValid, setIsWebsiteLinkValid] = useState(true);
    const [isComunityLinkValid, setIsComunityLinkValid] = useState(true);

    emailjs.init(GATSBY_EMAILJS_PUBLICK_KEY);

    const inputChangeHandler = (setFunction, event) => {
        setFunction(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();

        if(!organizationName) {
            return;
        }

        if (isURL(websiteLink)) {
            setIsWebsiteLinkValid(true);
        } else {
            setIsWebsiteLinkValid(false);
            return;
        }

        if (isURL(communityLink)) {
            setIsComunityLinkValid(true);
        } else {
            setIsComunityLinkValid(false);
            return;
        }

        const data = {
            service_id: 'service_4odwy7d',
            template_id: 'template_7pl8p4f',
            user_id: '029J4cwhdZ4Slz7vE',
            template_params: {
                'message': `From '${organizationName}', our community link is ${communityLink}. You can review our website: ${websiteLink}.  More about us: "${information}".`,
            }
        };

        emailjs.send(GATSBY_EMAILJS_SERVICE_ID, GATSBY_EMAILJS_TEMPLATE_ID, data.template_params)
            .then(function(response) {
                setBtnDisabled(true);
                setSent(true);
                setOrganizationName("");
                setCommunityLink("");
                setWebsiteLink("");
                setInfomration("");
                setChecked(false);
            }, function(error) {
                console.log('FAILED...', error);
            });
    }

    return (
        <section id="contact" className={background}>
            <div>
                <div className="padding-global">
                    <div className="container-large">
                        <div className="formWrapper">
                            <h2 className="heading-style-h2">{content.head}</h2>
                            {content.feature.map((item, index) => {
                                return (
                                    <>
                                        <div key={index}
                                             className={
                                                 item.alignImage === "left"
                                                     ? "container-form rowReverse"
                                                     : "container-form"
                                             }
                                        >
                                            <div
                                                data-current="Tabs"
                                                className="tabs tabs-partner-form w-tabs"
                                            >
                                                <div className="">
                                                    <div
                                                        className={`${
                                                            item.commingSoon ? "" : "hide"
                                                        } bank-image-comming-soon`}
                                                    >
                                                        {item.offerText}
                                                    </div>
                                                    <div className="money">
                                                        <h2 className="heading-style-h2 white margin-bottom margin-small">
                                                            {item.h1}
                                                            <span
                                                                className={`${
                                                                    item.commingSoon ? "is-blue" : "is-lime"
                                                                }  heading-style-h2`}
                                                            >{item.h2}
                                                            </span>
                                                        </h2>
                                                        <p
                                                            className={`${
                                                                item.commingSoon ? "" : "text-color-grey"
                                                            } text-size-large `}
                                                        >
                                                            {item.h3}
                                                        </p>
                                                        <p className="text-size-large text-color-grey">
                                                            {item.h4}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    item.alignImage === "left"
                                                        ? "wrapper-left-image"
                                                        : "wrapper-right"
                                                }
                                            >

                                                <Form ref={formRef} onSubmit={handleSubmit}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label
                                                            className="formLabel">
                                                            Token/Organization name
                                                        </Form.Label>
                                                        <Form.Control
                                                            aria-required={true}
                                                            value={organizationName}
                                                            className="formInput"
                                                            aria-errormessage={'Please enter organization name'}
                                                            type="text"
                                                            placeholder="Organization name"
                                                            onChange={(e) =>
                                                                inputChangeHandler(setOrganizationName, e)
                                                            }/>
                                                    </Form.Group>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicEmail">
                                                        <Form.Label
                                                            className="formLabel">
                                                            Community Link
                                                        </Form.Label>
                                                        <Form.Control
                                                            aria-required={true}
                                                            className="formInput"
                                                            type="url"
                                                            value={communityLink}
                                                            placeholder="Community link"
                                                            onChange={(e) =>
                                                                inputChangeHandler(setCommunityLink, e)
                                                            }/>
                                                    </Form.Group>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicEmail">
                                                        <Form.Label
                                                            className="formLabel">
                                                            Website Link
                                                        </Form.Label>
                                                        <Form.Control
                                                            aria-required={true}
                                                            className="formInput"
                                                            type="url"
                                                            value={websiteLink}
                                                            placeholder="Website link"
                                                            onChange={(e) =>
                                                                inputChangeHandler(setWebsiteLink, e)
                                                            }/>
                                                    </Form.Group>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicEmail">
                                                        <Form.Label
                                                            className="formLabel">
                                                            Additional Information
                                                        </Form.Label>
                                                        <Form.Control
                                                            aria-required={true}
                                                            className="formInput formInputMultiLine"
                                                            value={information}
                                                            size="lg"
                                                            as="textarea" rows="8"
                                                            placeholder="Additional information"
                                                            onChange={(e) =>
                                                                inputChangeHandler(setInfomration, e)
                                                            }/>
                                                    </Form.Group>
                                                    <Form.Group
                                                        className="mb-3 formCheckbox"
                                                        controlId="formBasicCheckbox">
                                                        <Form.Check
                                                            type="checkbox"
                                                            label="I agree to receive emails" />
                                                    </Form.Group>
                                                    <PurpleButton
                                                        text={'Apply To Be A Partner'}
                                                        type="submit">
                                                    </PurpleButton>

                                                    <div
                                                        className={`${isSent ? "" : "hide"} formLabel`}
                                                    >
                                                        Application successfully sent!
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
