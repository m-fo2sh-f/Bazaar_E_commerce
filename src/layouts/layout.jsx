import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function layout({ children }) {
    return <>
        <Navigation />
        {children}
        <Footer />
    </>
}

export default layout;
