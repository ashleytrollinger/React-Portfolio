import React, { useEffect } from "react";

function Nav() {
    return (

        <nav>
            <ul className="flex-row">
                <li className="mx-2">Home</li>
                <li className="mx-2">Portfolio</li>
                <li className="mx-2">Contact</li>
                <li className="mx-2">Resume</li>
            </ul>
        </nav>
    );
}
export default Nav;