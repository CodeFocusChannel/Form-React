import React from "react";
import { SAttribute, SHeader, SHeaderContent, SLogo } from "./styles";

const Header = () => {
    return (
        <SHeader>
            <SHeaderContent>
                <SLogo>Form Component </SLogo>
                <SAttribute
                    href={"https://www.youtube.com/channel/UCQo_1uyUB4wf-5u7OsVIGHg"}
                    target="_blank"
                >
                    CodeFocus
                </SAttribute>
            </SHeaderContent>
        </SHeader>
    );
};

export default Header;
