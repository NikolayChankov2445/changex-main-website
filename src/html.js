import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="author" content="ChangeX"/>
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta property="og:type" content="website"/>
          <meta property="og:image" content={'https://changex.io/images/Changex-OG.jpeg'}/>
          <meta property="og:image:type" content='image/jpeg'/>
          <meta property="og:url" content={'https://changex.io'}/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:image" content={'https://changex.io/images/Changex-OG.jpeg'}/>
          <meta name="twitter:image:src" content={'https://changex.io/images/Changex-OG.jpeg'}/>
          <meta name="twitter:site" content={'@ChangeXapp'}/>
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet"/>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <link rel="stylesheet" href="/assets/styles/style.css" />
        <link rel="stylesheet" href="/assets/styles/slider.css"/>
        <link rel="stylesheet" href="/assets/styles/bootstrap.min.css"/>
        <script src={'/assets/bootstrap.min.js'} type="application/javascript" />
        <script src={'/assets/email.min.js'} type="application/javascript" />
        <script src={'/assets/sg-widget-v2.js'} type="application/javascript" />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
