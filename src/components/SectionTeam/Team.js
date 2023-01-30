import * as React from "react";

export default function Team({ titleObj, teamData }) {

    return (
        <div id="section_team">
            <div className="padding-global">
                <div className="container-large ">
                    <h5 className="heading-style-h7 margin-vertical margin-large blue">
                        {titleObj.head2}
                    </h5>
                    <h3 className="heading-style-h3 margin-vertical margin-large">
                        {titleObj.head}
                    </h3>
                    <p className="margin-vertical margin-large">
                        <strong>{titleObj.paragraph}</strong>
                    </p>
                    <div className="w-layout-grid grid-3"></div>
                </div>
            </div>
        </div>
    );
}
