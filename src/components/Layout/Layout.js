import React from "react";
import "../../styles/style.css";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navigation />
            <main className="pages">{children}</main>
            <Footer />
        </div>
    );
}
