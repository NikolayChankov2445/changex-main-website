import * as React from "react";

const SEO = ({ title, description, imageAlt }) => (
    <>

        <title>{title}</title>
        <meta property="og:title" content={title}/>
        <meta name="description" content={description}/>
        <meta property="og:description" content={description}/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={'https://changex.io/images/Changex-OG.jpeg'}/>
        <meta property="og:image:type" content='image/jpeg'/>
        <meta property="og:url" content={'https://changex.io'}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image:alt" content={imageAlt}/>
        <meta name="twitter:image" content={'https://changex.io/images/Changex-OG.jpeg'}/>
        <meta name="twitter:image:src" content={'https://changex.io/images/Changex-OG.jpeg'}/>
        <meta name="twitter:site" content={'@ChangeXapp'}/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
        <meta charSet="utf-8"/>
        <meta name="author" content="ChangeX"/>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
    </>
)

export default SEO;
