import * as React from "react";
import {useEffect, useState} from "react";
import $ from "jquery";

import Carousel from "react-bootstrap/Carousel";
import { sliderThoughtData } from "../SectionBank/bankItems";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function ThoughtWall({ thoughtObj }) {

    useEffect(() => {
        if (window && typeof window !== undefined) {
            window.addEventListener("resize", handleWindowResize);
        }
    },[])

    const [imageIndex, setImageIndex] = useState(0);

    function handleWindowResize() {
        if (typeof window !== undefined) {
            if (window.innerWidth <= 600) {
                $(".bankThought").attr(
                    "src",
                    `../../images/bank/bank_${imageIndex}_mobile.png`
                );
            } else {
                $(".bankThought").attr("src", `../../images/bank/bank_${imageIndex}.png`);
            }
        }
    }

    function onSelect(eventKey, event) {
        setImageIndex(eventKey);
        if (typeof window !== undefined) {
            if (window.innerWidth <= 600) {
                $(".bankThought").attr(
                    "src",
                    `../../images/bank/bank_${eventKey}_mobile.png`
                );
            } else {
                $(".bankThought").attr("src", `../../images/bank/bank_${eventKey}.png`);
            }
        }

    }

    return (
        <section id="thought-wall">
            <div>
                <div className="about">
                    <img
                        className={`${thoughtObj.page === "About" ? "aboutPage" : "hide"}`}
                        src={`${thoughtObj.image || ''}`}
                        alt="changex money"
                    />
                    <img
                        className={`${thoughtObj.page === "Bank" ? "bankThought" : "hide"}`}
                        src={`${thoughtObj.image || ''}`}
                        alt="changex money"
                    />

                </div>
                {thoughtObj.page === "Bank" && (

                    <Carousel
                        touch={true}
                        slide={true}
                        interval={2000}
                        onSelect={onSelect}
                        className="bankStick"
                        id="bankCarousel"
                        indicators={true}
                        nextLabel=""
                        prevLabel=""
                        prevIcon={
                            <span data-slide="prev" className="left carouselIcon">
                        {" "}
                                <FaAngleLeft />{" "}
                    </span>
                        }
                        nextIcon={
                            <span data-slide="next" className="right carouselIcon">
                        {" "}
                                <FaAngleRight />{" "}
                    </span>
                        }>

                        {sliderThoughtData.map((item, index) => {
                            return (
                                <Carousel.Item key={index} className="w-100 carouselItem">
                                    <div className="slider-header">
                                        <h4 className="slider-header-text">{item.head}</h4>
                                    </div>
                                    <div className="slider-content">
                                        <p className="slider-content-text">{item.p1}</p>
                                    </div>
                                    <div className="slider-content">
                                        <p className="slider-content-text">{item.p2}</p>
                                    </div>
                                </Carousel.Item>
                            );
                        })}
                    </Carousel>
                )}

                {thoughtObj.page === "About" && (
                    <div className="aboutStick">
                            <span className="slider-content-text">
                                {thoughtObj.p1}
                                <span className="is-link"> Change starts now. </span>
                            </span>
                        <span className="slider-content-text">{thoughtObj.p2}</span>
                    </div>
                )}
            </div>
        </section>
    );
}
