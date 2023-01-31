import * as React from "react";
import { useRef, useState } from "react"

import Carousel from "react-bootstrap/Carousel";

import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import styled from "styled-components";

const TypographySubTitle = styled.p`
  padding: 5px 0 0 0;
  font-size: medium;
  width: fit-content;
  color: #ffffff;
`

const TypographySubTitleSlider = styled.p`
  padding: 5px 0 0 0;
  font-size: medium;
  width: fit-content;
  margin: auto;
  color: #ffffff;
`

const PopUpBtn = styled.button`
  background-color: transparent !important;
  outline: none;
  &:hover {
        outline: none;
  },
  &:focus {
      outline: none;
  }
`

export default function DefiToken({ background, tokenData}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [popupText, setPopupText] = useState('');
    const [popupTitle, setPopupTitle] = useState('');
    const [slideItemsText, setSlideItemsText] = useState('1 of 6');

    const carouselRef = useRef();

    const handleClick = (event ,index) => {
        setPopupText(tokenData.perks[index].content)
        setPopupTitle(tokenData.perks[index].title)
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function LeftBtnClick() {
        carouselRef.current.prev();
    }

    function RightBtnClick() {
        carouselRef.current.next();

    }

    function onSlide(eventKey) {
        setSlideItemsText(`${eventKey +1} of 6`)
    }

    const open = Boolean(anchorEl);

    return (
        <section id="defi-perks" className={background}>
            <div className="padding-global">
                <div className="container-large">
                    <h4 className={`${background === "background-color-black" ? "is-lime" : "blue" } heading-style-h6 margin-vertical margin-large`}>
                        {tokenData.head2}
                    </h4>
                    <h3 className={`${background === "background-color-black" ? "white" : "blue"} heading-style-h3 margin-vertical margin-large`}>
                        {tokenData.head}
                    </h3>
                    <p className="text-weight-normal off-white">
                        {tokenData.paragraph}
                    </p>
                    <div className="defi-perks-wrapper">
                        <div className="grid-defi-perks">

                            <div className="grid-header">
                                <PopUpBtn onClick={(e) => {handleClick(e,0)}}>
                                    <img width="210" height="200" src={tokenData.perks[0].image || ''} alt={tokenData.perks[0].title}/>
                                </PopUpBtn>
                            </div>

                            <div className="grid-second">
                                <div>
                                    <PopUpBtn onClick={(e) => {handleClick(e,1)}}>
                                        <img width="210" height="200" src={tokenData.perks[1].image || ''} alt={tokenData.perks[1].title}/>
                                    </PopUpBtn>
                                </div>
                                <div>
                                    <PopUpBtn onClick={(e) => {handleClick(e,2)}}>
                                        <img width="210" height="200" src={tokenData.perks[2].image || ''} alt={tokenData.perks[2].title}/>
                                    </PopUpBtn>
                                </div>
                            </div>

                            <div className=" grid-center">
                                <img className="centerIcon animate-spin"  src={tokenData.centerIcon || ''} alt={'Defi Change'}/>
                            </div>

                            <div className="grid-main">
                                <div>
                                    <PopUpBtn onClick={(e) => {handleClick(e,5)}}>
                                        <img width="210" height="200" src={tokenData.perks[5].image || ''} alt={tokenData.perks[5].title}/>
                                    </PopUpBtn>
                                </div>
                                <div>
                                    <PopUpBtn  onClick={(e) => {handleClick(e,4)}}>
                                        <img width="210" height="200" src={tokenData.perks[4].image || ''} alt={tokenData.perks[4].title}/>
                                    </PopUpBtn>
                                </div>

                            </div>

                            <div className="grid-bottom">
                                <PopUpBtn onClick={(e) => {handleClick(e,3)}}>
                                    <img width="210" height="200" src={tokenData.perks[3].image || ''} alt={tokenData.perks[3].title}/>
                                </PopUpBtn>
                            </div>
                        </div>

                    </div>
                    <Carousel
                        controls={false}
                        slide={true}
                        indicators={false}
                        touch={true}
                        onSlide={(eventKey) => {
                            onSlide(eventKey);
                        }}
                        ref={carouselRef}
                        className="defiPerksCarousel"
                        height="500"
                        data-bs-ride="carousel"
                    >
                        {tokenData.perks.map((item, index) => {
                            return (
                                <div key={index} className="carousel-item">
                                    <div>
                                        <img alt={item.title} src={item.image || ''} />
                                        <p> {item.title}</p>
                                    </div>
                                    <div className="spacer-middle"></div>
                                    <TypographySubTitleSlider>{item.content}</TypographySubTitleSlider>
                                </div>

                            );
                        })}
                    </Carousel>
                    <div className="spacer-middle"></div>
                    <div className="defiPerksCarouselControls">
                        <button
                            onClick={(e) => {
                                LeftBtnClick(e);
                            }}
                            className="button-arrows"
                        >
                            <BiChevronLeft />
                        </button>
                        <span>{slideItemsText}</span>
                        <button
                            onClick={(e) => {
                                RightBtnClick(e);
                            }}
                            className="button-arrows"
                        >
                            <BiChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
