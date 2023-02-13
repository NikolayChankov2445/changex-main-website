import React from "react";
import {lazy} from "react";

import ApyContextProvider from "../Context/ApyContext";
import PricesContextProvider from "../Context/PriceContext";

const Navigation = lazy(() => import('../Navigation/Navigation'));
const Footer = lazy(() => import('../Footer/Footer'));


export default function Layout({ children }) {
    return (
        <>
            <ApyContextProvider>
                <PricesContextProvider>
                    <Navigation />
                        <main className="pages">{children}</main>
                    <Footer />
                </PricesContextProvider>
            </ApyContextProvider>
        </>
    );
}
