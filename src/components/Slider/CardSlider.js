import * as React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import scrollTo from 'gatsby-plugin-smoothscroll';
import Carousel from "react-multi-carousel";

import { FaAngleRight } from "react-icons/fa";

const CardActionsWrapper = styled.div`
  padding: 10px 0;
`

export default function CardSlider({
                                       onClickNav,
                                       responsiveSliderData,
                                       sliderData,
                                   }) {
    const carouselRef = useRef();

    const [timer, setTimer] = useState(false);



    useEffect(() => {
        setTimeout(() => {
            setTimer(true);
        }, 1000);
    }, []);

    return (
        <Carousel
            ref={carouselRef}
            additionalTransfrom={responsiveSliderData.additionalTransfrom}
            afterChange={function (previousSlide, _ref) {
                onClickNav(_ref.currentSlide, carouselRef);
            }}
            autoPlaySpeed={responsiveSliderData.autoPlaySpeed}
            autoPlay={!timer}
            centerMode={responsiveSliderData.centerMode}
            arrows={responsiveSliderData.arrows}
            className={responsiveSliderData.className}
            containerClass={responsiveSliderData.containerClass}
            dotListClass={responsiveSliderData.dotListClass}
            draggable={responsiveSliderData.draggable}
            focusOnSelect={responsiveSliderData.focusOnSelect}
            infinite={responsiveSliderData.infinite}
            itemClass={responsiveSliderData.itemClass}
            keyBoardControl={responsiveSliderData.keyBoardControl}
            minimumTouchDrag={responsiveSliderData.minimumTouchDrag}
            partialVisible={responsiveSliderData.partialVisible}
            pauseOnHover={responsiveSliderData.pauseOnHover}
            renderArrowsWhenDisabled={responsiveSliderData.renderArrowsWhenDisabled}
            renderDotsOutside={responsiveSliderData.renderDotsOutside}
            responsive={responsiveSliderData.responsive}
            rewind={responsiveSliderData.rewind}
            rewindWithAnimation={responsiveSliderData.rewindWithAnimation}
            rtl={responsiveSliderData.rtl}
            customButtonGroup={responsiveSliderData.customButtonGroup}
            renderButtonGroupOutside={responsiveSliderData.renderButtonGroupOutside}
            shouldResetAutoplay={responsiveSliderData.shouldResetAutoplay}
            showDots={responsiveSliderData.showDots}
            sliderClass={responsiveSliderData.sliderClass}
            slidesToSlide={responsiveSliderData.slidesToSlide}
            swipeable={responsiveSliderData.swipeable}
        >
            {sliderData.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="card-slide"
                        id={index.toString()}
                        style={{ maxWidth: 360, margin: "30px 30px" }}
                    >
                        <>
                            <img
                                height="200"
                                width="200"
                                src={item.image || ''}
                                alt={item.alt}
                            />
                            <div className="card-content">
                                {item.head && (
                                    <div
                                        className="card-header heading-style-h5"
                                    >
                                        {item.head}
                                    </div>
                                )}
                                <p
                                    className="card-caption"
                                    color="text.secondary"
                                >
                                    {item.text}
                                </p>
                                <CardActionsWrapper>
                                    {item.url && (
                                        <div className="card-link">
                                            {item.route && (
                                                <button href="#" onClick={() => scrollTo(item.url)}>
                                                    {item.linkText} <FaAngleRight />
                                                </button>
                                            )}

                                            {item.route === false && (
                                                <a href={item.url} target="_blank"  rel="noreferrer">
                                                    {item.linkText} <FaAngleRight />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </CardActionsWrapper>
                            </div>
                        </>
                    </div>
                );
            })}
        </Carousel>
    );
}
