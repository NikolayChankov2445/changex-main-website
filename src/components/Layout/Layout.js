import React from "react";
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
                        <main className="pages">{children}</main>
                    <Footer />
                </PricesContextProvider>
            </ApyContextProvider>
        </>
    );
}
