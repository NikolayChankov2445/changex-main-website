import * as React from "react";
import { useState } from "react";

import CardSlider from "../Slider/cardSlider";
import "react-multi-carousel/lib/styles.css";
import {LimeButton} from "../Buttons/Lime";


let carouselRef2;

export default function SectionSlider({
                                          textData,
                                          sliderData,
                                          responsiveSliderData,
                                          menuTabs,
                                      }) {
    const [active, setActive] = useState("stake");

    async function onClickNav(index, carouselRef) {
        if (menuTabs) {
            carouselRef2 = carouselRef;

            if (index === 3 || index === 6) {
                index = 0;
            }
            if (index === 4 || index === 7) {
                index = 1;
            }
            if (index === 5 || index === 8) {
                index = 2;
            }

            setActive(menuTabs[index].id);
        }
    }
    function handleClick(id, index) {
        carouselRef2.current.goToSlide(index);
    }

    return (
        <div id="changex_slider" className={textData.background}>
            <div className="padding-global">
                <div className="container-large">
                    <div className="main-container">
                        <div
                            data-current="Tabs"
                            data-easing="ease-out"
                            data-duration-in="300"
                            data-duration-out="100"
                            className="tabs tabs-wealth margin-top w-tabs"
                        >
                            <div className="max-width-small-slider">
                                <div className="money">
                                    <div className="label is-lime">{textData.head}</div>
                                    <h2 className="heading-style-h2 margin-bottom margin-small">
                                        {textData.h1}
                                        <span className="highlight is-green"> {textData.h2}</span>
                                    </h2>
                                    <p className="text-size-xlarge text-color-grey">
                                        {textData.h3}
                                    </p>
                                </div>

                                <div
                                    className={`${menuTabs ? "" : "hide"} tabs-menu w-tab-menu`}
                                >
                                    {menuTabs &&
                                        menuTabs.map((item, index) => {
                                            return (
                                                <button
                                                    key={index}
                                                    id={item.id}
                                                    onClick={() => handleClick(item.id, index)}
                                                    className={
                                                        active === item.id
                                                            ? "tab-link w-inline-block button-blue"
                                                            : "tab-link w-inline-block"
                                                    }
                                                >
                                                    <div>{item.title}</div>
                                                </button>
                                            );
                                        })}
                                </div>
                                <div
                                    className={`${
                                        menuTabs ? "hide" : ""
                                    } tabs-menu w-tab-menu  w-inline-block centered-items`}
                                >
                                    <LimeButton text={textData.buttonTxt} url={textData.buttonUrl} size={'large'}/>
                                </div>
                            </div>
                        </div>
                        <div className="max-width-full wealth-card-slider margin-slider w-tab-content">
                            <CardSlider
                                onClickNav={onClickNav}
                                responsiveSliderData={responsiveSliderData}
                                sliderData={sliderData}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
