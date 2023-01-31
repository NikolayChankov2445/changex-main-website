import * as React from "react";

import Accordion from 'react-bootstrap/Accordion';
import {LimeSmallButton} from "../Buttons/LimeSmall";
import {PinkSmallButton} from "../Buttons/PinkSmall";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import {Card} from "react-bootstrap";
import {BsFillPlusCircleFill} from "react-icons/all";

function CustomToggle({ children, eventKey , background}) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            className={background === "background-color-off-white"
                ? "text-color-black"
                : "text-color-white"}
            style={{ backgroundColor: 'pink' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

export default function Faq({ background, title, faqContent }) {
    return (
        <section id="faqs" className="section_faq">
            <div className={`padding-global ${background}`}>
                <div className="container-large">
                    <div className="">
                        <div
                            className="grid-2"
                        >
                            <div>
                                <div className="slide-from-bottom">
                                    <h2 className="heading-style-h2 margin-vertical margin-xlarge">
                                        {title}
                                    </h2>
                                </div>
                                <div className="w-layout-grid faq-grid margin-vertical slide-from-bottom">
                                    <Accordion>
                                        {faqContent.map((faq, index) => {
                                            return (
                                                <Accordion.Item
                                                    eventKey={index}
                                                    key={index}
                                                    id={index.toString()}
                                                    className="faq-question-bar w-inline-block"
                                                        expandIcon={<BsFillPlusCircleFill />}
                                                        aria-controls="panel1a-content"
                                                    >
                                                        <Accordion.Header
                                                            className={`heading-style-h6 margin-null ${
                                                                background === "background-color-off-white"
                                                                    ? "text-color-black"
                                                                    : "text-color-white"
                                                            }`}
                                                        >
                                                            {faq.title}
                                                            <Accordion.Button> <BsFillPlusCircleFill /></Accordion.Button>
                                                        </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div
                                                            className={`heading-style-h7 margin-null faq-content ${
                                                                background === "background-color-off-white"
                                                                    ? "text-color-black"
                                                                    : "text-color-white"
                                                            }`}
                                                        >
                                                            {faq.content}
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            );
                                        })}
                                    </Accordion>

                                    <Accordion>
                                        {faqContent.map((faq, index) => {
                                            return (
                                                <Card
                                                    key={index}
                                                    id={index.toString()}
                                                    className="faq-question-bar w-inline-block"
                                                    aria-controls="panel1a-content"
                                                >
                                                    <Card.Header
                                                        className={`heading-style-h6 margin-null ${
                                                            background === "background-color-off-white"
                                                                ? "text-color-black"
                                                                : "text-color-white"
                                                        }`}
                                                    >
                                                        {faq.title}
                                                        <CustomToggle></CustomToggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse
                                                        className={`heading-style-h6 margin-null ${
                                                        background === "background-color-off-white"
                                                            ? "text-color-black"
                                                            : "text-color-white"
                                                    }`}
                                                        eventKey={index}>
                                                        <Card.Body>
                                                            <div
                                                                className={`heading-style-h7 margin-null faq-content ${
                                                                    background === "background-color-off-white"
                                                                        ? "text-color-black"
                                                                        : "text-color-white"
                                                                }`}
                                                            >
                                                                {faq.content}
                                                            </div>
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            );
                                        })}
                                    </Accordion>
                                </div>
                            </div>
                            <div className="faqContact">
                                <div
                                    className={`slide-from-bottom contact ${
                                        background === "background-color-off-white"
                                            ? "contact-border-blue"
                                            : "contact-border-lime background-color-off-green"
                                    }`}
                                >
                                    <h5 className="heading-style-h5">Still got questions?</h5>
                                    <p className="text-size-medium margin-vertical margin-small">
                                        Drop us a line at&nbsp;
                                        <a
                                            href="mailto:support@changex.io?subject=changex%20website"
                                            className={`${
                                                background === "background-color-off-white"
                                                    ? "highlight is-blue"
                                                    : "is-lime"
                                            }`}
                                        >
                                            support@changex.io&nbsp;
                                        </a>
                                        and we'll get back to you.
                                    </p>
                                    <div className={`${background === "background-color-off-white" ? 'hide' : ''}`}>
                                        <LimeSmallButton text={'Contact Us'} url={'mailto:support@changex.io?subject=changex%20website'} size={'small'} />
                                    </div>
                                    <div className={`${background === "background-color-off-white" ? '' : 'hide'}`}>
                                        <PinkSmallButton text={'Contact Us'} url={'mailto:support@changex.io?subject=changex%20website'} size={'small'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
