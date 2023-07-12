import React from "react";

function Footer() {
    return (

        <footer className="footer">
            <div>
                <a
                    href="https://github.com/ashleytrollinger"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require("../../assets/logos/github-mark.png")}
                        alt="Github"
                        className="logo"
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://linkedin.com/in/ashley-trollinger-a3276826a/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require("../../assets/logos/linkedin.png")}
                        alt="LinkedIn"
                        className="logo"
                    ></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;