import React from "react";
import "../../styles/style.css";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import "../../styles/style.css";

export default function Layout({ children }) {
    return (
            <main className="pages">{children}</main>
    );
}
