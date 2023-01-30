import React from "react";
import "../../styles/style.css";
import Footer from "../Footer/Footer";

import "../../styles/style.css";
import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
                <main className="pages">{children}</main>
            <Footer />
        </>
    );
}
