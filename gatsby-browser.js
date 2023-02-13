import * as React from "react";
import "react-multi-carousel/lib/styles.css";
import 'react-vertical-timeline-component/style.min.css';


export const shouldUpdateScroll = ({
                                  routerProps: { location },
                                  getSavedScrollPosition,
                              }) => {
    const { pathname } = location
    // list of routes for the scroll-to-top-hook
    const scrollToTopRoutes = [`/wallet`, `/wealth`, `/bank`, `/token`, `/partner`, `/supported`]
    // if the new route is part of the list above, scroll to top (0, 0)
    if (scrollToTopRoutes.indexOf(pathname) !== -1) {
        window.scrollTo(0, 0)
    }

    return false
}
