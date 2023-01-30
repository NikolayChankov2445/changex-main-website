import React from "react";
import "../../styles/style.css";

export default function Navigation({ children }) {
    return (
        <div className="layout">
            <div className="pages">{children}</div>
        </div>
    );
}
