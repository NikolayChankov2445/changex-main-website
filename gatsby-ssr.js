import * as React from "react";
import Layout from "./src/components/Layout/Layout"
// Adds a class name to the body element
export const onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
    setBodyAttributes({
        className: "changex"
    })
}

/*
export const wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <Layout {...props}>{element}</Layout>
}
*/
