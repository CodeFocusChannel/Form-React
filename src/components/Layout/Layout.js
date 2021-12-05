import React from "react";
import Header from "./Header/Header";
import { SMain } from "./styles";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <SMain>{children}</SMain>
        </>
    );
};

export default Layout;
