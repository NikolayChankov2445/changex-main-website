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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet"/>
    </>
)

export default SEO;
