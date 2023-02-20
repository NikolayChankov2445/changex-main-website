import * as React from "react";
import { LimeButton } from "../Buttons/Lime";
import { PrimaryButton } from "../Buttons/Primary";
import styled from "styled-components";


const WrapperText = styled.div`
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
      "head"
      "bottom";
  display: inline-grid;
  max-width: var(--containerLargeWidth);
  margin: auto;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    border: none;
    font-size: 18px;
    padding: 0;
`

const WrapperImage = styled.div`
  z-index: 0;
  width: 100%;
  display: contents;
  grid-area: head;
  align-self: center;
  @media (max-width: 768px) {
    grid-area: bottom;
`

const Wrapper = styled.div`
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
      "head"
      "bottom";
  display: inline-grid;
  grid-column-gap: 8rem;
  max-width: var(--containerLargeWidth);
  margin: auto;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    border: none;
    font-size: 18px;
    padding: 0;
`

const Footer = styled.p`
  font-size: 24px;
  font-family: Source Sans Pro, sans serif;
  max-width: 64rem;
  text-align: center;
  width: 100%;
  margin: auto;
  border-radius: 18px;
  border: 1px solid #3418d8;
  padding: 32px 64px;
  @media (max-width: 768px) {
    text-align: start;
    border: none;
    grid-area: head;
    font-size: 18px;
    padding: 0;
`

export default function CommingSoon({ background, content }) {
    return (
        <section id="feature" className="section_feature">
            <div className={background}>
                <div className="padding-global">
                    <div className="container-large">
                        <div className="features">
                            <h2 className="heading-style-h2">{content.head}</h2>
                            {content.feature.map((item, index) => {
                                return (
                                    <Wrapper
                                        key={index}
                                        className=""
                                    >
                                        <div
                                            data-current="Tabs"
                                            className="tabs tabs-wealth-feature w-tabs"
                                        >
                                            <div className="max-width-small-slider">
                                                <div
                                                    className={`${
                                                        item.commingSoon ? "" : "hide"
                                                    } bank-image-comming-soon`}
                                                >
                                                    {item.offerText}
                                                </div>
                                                <div className="money">
                                                    <h2 className="heading-style-h2 margin-bottom margin-small">
                                                        {item.h1}&nbsp;
                                                        <span
                                                            className={`${
                                                                item.commingSoon ? "is-blue" : "is-lime"
                                                            }  heading-style-h2`}
                                                        >
                                                                {item.h2}
                                                            </span>
                                                    </h2>
                                                    <p
                                                        className={`${
                                                            item.commingSoon ? "" : "text-color-grey"
                                                        } text-size-xlarge `}
                                                    >
                                                        {item.h3}
                                                    </p>
                                                    <p className="text-size-xlarge text-color-grey margin-bottom-small">
                                                        {item.h4}
                                                    </p>
                                                </div>
                                                <div className={`${background === "background-color-blue" ? "" : "hide"}`}>
                                                    <LimeButton text={item.buttonTxt} url={item.buttonUrl} icon={''} />
                                                </div>
                                                <div className={`${background === "background-color-off-pink" ? "" : "hide"}`}>
                                                    <PrimaryButton text={item.buttonTxt} url={item.buttonUrl} icon={''} />
                                                </div>
                                            </div>
                                        </div>
                                        <WrapperImage className="rowReverse">
                                            <img alt={item.h2} className={item.imageClass} src={item.imageUrl  || ''} />
                                        </WrapperImage>
                                    </Wrapper>
                                );
                            })}
                            <div className="">
                                <Footer


                                >
                                    {content.info}
                                </Footer>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
