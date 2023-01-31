import React from "react";
import "../../styles/style.css";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
                <main className="pages">{children}</main>
            <Footer />
        </>
    );
}
