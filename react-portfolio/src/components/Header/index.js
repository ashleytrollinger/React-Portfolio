import React from "react";
import Nav from "../Nav";

function Header(props) {
    const { currentTab, setCurrentTab } = props;
    return (
        <header>
            <h1>Ashley Trollinger</h1>
            <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
        </header>

    )
}
export default Header;