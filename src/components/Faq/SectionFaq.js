import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircle from "@mui/icons-material/Add";
import {LimeSmallButton} from "../Buttons/LimeSmall";
import {PinkSmallButton} from "../Buttons/PinkSmall";

export default function Faq({ background, title, faqContent }) {
    return (
        <section id="faqs" className="section_faq">
            <div className={`padding-global ${background}`}>
                <div className="container-large">
                    <div>
                        <div
                            className="grid-2-faq"
                        >
                            <div>
                                <div className="slide-from-bottom">
                                    <h2 className="heading-style-h2 margin-vertical margin-medium">
                                        {title}
                                    </h2>
                                </div>
                                <div className="w-layout-grid faq-grid margin-vertical slide-from-bottom">
                                    {faqContent.map((faq, index) => {
                                        return (
                                            <Accordion
                                                key={index}
                                                id={index.toString()}
                                                className="faq-question-bar w-inline-block"
                                            >
                                                <AccordionSummary
                                                    expandIcon={<AddCircle />}
                                                    className="expandCircle"
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography
                                                        className={`heading-style-h5 margin-null ${
                                                            background === "background-color-off-white"
                                                                ? "text-color-black"
                                                                : "text-color-white"
                                                        }`}
                                                    >
                                                        {faq.title}
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography
                                                        className={`heading-style-h6 margin-null ${
                                                            background === "background-color-off-white"
                                                                ? "text-color-black"
                                                                : "text-color-white"
                                                        }`}
                                                    >
                                                        {faq.content}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        );
                                    })}
                                </div>
                            </div>
                            <div style={{ margin: "auto" }}>
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
