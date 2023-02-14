import * as React from "react";

export default function Perks({ perksArray, component }) {
    return (
        <>
            <section className="margin-top-small" id="perks">
                <div
                    className={`${
                        component === "bank" ? "grid-3" : "grid-2"
                    } w-layout-grid`}
                >
                    {perksArray.map((item) => {
                        return (
                            <div key={item.id} id={item.id} className="box-container-bank">
                                <div className="padding-medium">
                                    <div className="icon-wrapper icon-card margin-bottom margin-large">
                                        <img
                                            src={item.src  || ''}
                                            loading="lazy"
                                            alt={item.title}
                                            className="icon"
                                        />
                                    </div>
                                    <h5 className="card-title margin-top margin-large">
                                        <strong>{item.title}</strong>
                                    </h5>
                                    <p className="text-color-darkgrey card-text font-paragraph">{item.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
