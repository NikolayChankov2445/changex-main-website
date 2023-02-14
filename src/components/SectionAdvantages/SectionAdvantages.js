import * as React from "react";
import styled from "styled-components";

const AdvantageWrapper = styled.div`
    position: relative;
`

export default function SectionAdvantages({ pageClass, classGrid, title, advantages }) {
    return (
        <AdvantageWrapper id="advantages">
            <div className={`${pageClass === 'walletPage' ? 'padding-global' : 'padding-global-bottom-sides'}`}>
                <div className="container-large">
                    <div className="main-container-block">
                        {classGrid === "card-grid-wallet" && (
                            <h3 className="heading-style-h3 text-align-center margin-vertical margin-large">
                                {title}
                            </h3>
                        )}
                        <div className={classGrid}>
                            {classGrid !== "card-grid-wallet" && (
                                <h3 className="heading-style-h3 text-align-center margin-vertical margin-large">
                                    {title}
                                </h3>
                            )}
                            <div className="w-layout-grid grid-4">
                                {advantages.map((card, index) => {
                                    return (
                                        <div id={card.id} key={index} className="box-container">
                                            <div className={`${card.title ? '' : 'mobile-flex'} card-icon`}>
                                                <div className="icon-wrapper margin-medium">
                                                    <img
                                                        src={card.src || ''}
                                                        loading="lazy"
                                                        alt=""
                                                        width={card.width}
                                                        className="card-svg"
                                                    ></img>
                                                </div>
                                                <h5 className="headingTextSize">{card.title}</h5>
                                                <p
                                                    className={`${card.title ? 'card-text' : 'card-text-middle'} card-text paragraph18 font-paragraph margin-top margin-large`}
                                                >
                                                    {card.text}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdvantageWrapper>
    );
}
