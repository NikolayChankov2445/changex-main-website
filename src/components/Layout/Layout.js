import React from "react";
import PageTransition from 'gatsby-plugin-page-transitions';
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import ApyContextProvider from "../Context/ApyContext";
import PricesContextProvider from "../Context/PriceContext";

export default function Layout({ children }) {
    return (
        <>
            <ApyContextProvider>
                <PricesContextProvider>
                    <Navigation />
                    <PageTransition>
                        <main className="pages">{children}</main>
                    </PageTransition>
                    <Footer />
                </PricesContextProvider>
            </ApyContextProvider>
        </>
    );
}
