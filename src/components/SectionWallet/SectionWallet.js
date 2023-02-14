import * as React from "react";
import { useState, useRef } from "react";

import Carousel from "react-bootstrap/Carousel";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { scrollImages, slideImages } from "./walletItems";
import {LimeButton} from "../Buttons/Lime";

export default function SectionWallet() {
    let [itemIndex, SetItemIndex] = useState(0);
    const carouselRef = useRef();

    function RightBtnClick() {
        carouselRef.current.next();
        if (itemIndex === 2) {
            SetItemIndex(0);
        } else {
            SetItemIndex(itemIndex + 1);
        }
    }

    function LeftBtnClick() {
        carouselRef.current.prev();
        if (itemIndex === 0) {
            SetItemIndex(2);
        } else {
            SetItemIndex(itemIndex - 1);
        }
    }

    function onIndicatorsClick(eventKey) {
        SetItemIndex(eventKey);
    }

    return (
        <section id="wallet-section" className="section_wallet">
            <div className="background-color-black">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="main-container-wallet grid-2">
                            <div className="max-width-full wallet-slider  margin-slider w-tab-content">
                                <Carousel
                                    controls={false}
                                    slide={true}
                                    indicators={true}
                                    onSlide={(eventKey) => {
                                        onIndicatorsClick(eventKey);
                                    }}
                                    touch={true}
                                    ref={carouselRef}
                                    id="walletCarousel"
                                >
                                    {slideImages.map((item, index) => {
                                        return (
                                            <div key={index} className="carousel-item">
                                                <img src={item.image} alt={item.alt || ''} />
                                            </div>
                                        );
                                    })}
                                </Carousel>
                            </div>
                            <div
                                data-current="Tabs"
                                data-easing="ease-out"
                                data-duration-in="300"
                                data-duration-out="100"
                                className="tabs tabs-wallet margin-top w-tabs"
                            >
                                <div className="max-width-small-slider">
                                    <div className="wallet_wrapper-right">
                                        <div className="wallet-content">
                                            <div className="label is-lime slide-from-bottom">
                                                {scrollImages[itemIndex].h1}
                                            </div>
                                            <div style={{ margin: "0px 0 10px auto" }}>
                                                <button
                                                    onClick={(e) => {
                                                        LeftBtnClick(e);
                                                    }}
                                                    className="slide-arrows left-slide-arrow"
                                                >
                                                    <BiChevronLeft />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        RightBtnClick(e);
                                                    }}
                                                    className="slide-arrows right-slide-arrow"
                                                >
                                                    <BiChevronRight />
                                                </button>
                                            </div>
                                        </div>

                                        <h2 className="heading-style-h2 margin-bottom margin-large slide-from-bottom">
                                            {scrollImages[itemIndex].caption}
                                        </h2>
                                        <p className="text-color-grey wallet-text text-size-large slide-from-bottom">
                                            {scrollImages[itemIndex].text}
                                        </p>
                                        <LimeButton
                                            text={scrollImages[itemIndex].urlText}
                                            url={scrollImages[itemIndex].url}
                                        ></LimeButton>
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
