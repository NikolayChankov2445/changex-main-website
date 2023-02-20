import * as React from "react";

const SEO = ({ title, description, imageAlt }) => (
    <>
        <title>{title}</title>
        <meta property="og:title" content={title}/>
        <meta name="description" content={description}/>
        <meta property="og:description" content={description}/>
        <meta name="twitter:image:alt" content={imageAlt}/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
    </>
)

export default SEO;
