import * as React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import styled from "@emotion/styled";
import { FaAngleRight } from "react-icons/fa";

const CardActionsWrapper = styled.div`
  padding: 10px 0;
`

export default function PerksWealth({ perksArray }) {
    console.warn('perksArray', perksArray)
    return (
        <>
            <section className="margin-top-small" id="perks">
                <div
                    className={`grid-3 w-layout-grid`}
                >
                    {perksArray.map((item) => {
                        return (
                            <div key={item.id} id={item.id} className="box-container-wealth">
                                <div className="padding-medium">
                                    <div className="icon-wrapper icon-card margin-bottom">
                                        <img
                                            src={item.src  || ''}
                                            loading="lazy"
                                            alt={item.title}
                                            className="icon"
                                        />
                                    </div>
                                    <h5 className="card-title margin-top margin-top-small">
                                        <strong>{item.title}</strong>
                                    </h5>
                                    <p className="text-color-white card-text font-paragraph">{item.text}</p>
                                    <CardActionsWrapper>
                                        {item.url && (
                                            <div className="card-link">
                                                {item.route && item.linkText && (
                                                    <button onClick={() => scrollTo(item.url)}>
                                                        {item.linkText} <FaAngleRight />
                                                    </button>
                                                )}

                                                {item.route === false && item.linkText &&   (
                                                    <a
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        {item.linkText} <FaAngleRight />
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </CardActionsWrapper>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
