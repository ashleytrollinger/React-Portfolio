import React from "react";
import Project from "../Project";

function Portfolio() {
    const projects = [
        {
            name: "Employee Tracker",
            description: "Track different departments, employees, roles and salaries all on one database.",
            image: "Employee-Tracker.png",
            live: null,
            github: "https://github.com/ashleytrollinger/Employee-Tracker"
        },
        {
            name: "Jersey Shore Quiz",
            description: "Test your knowledge on the MTV hit show Jersey Shore.",
            image: "Jersey-Shore.png",
            live: null,
            github: "https://github.com/ashleytrollinger/Jersey-Shore-Quiz-Game"
        }, {
            name: "Find My Musician",
            description: "Networking site for aspiring musicians or just people who enjoy making music.",
            image: "Find-My-Musician.png",
            live: "https://find-my-musician.herokuapp.com/",
            github: "https://github.com/ashleytrollinger/FindMyMusician"
        },


        {
            name: "Weather Dashboard",
            description: "Works with OpenWeatherMap to create a 7 day weather forcaster",
            image: "Weather-Dashboard.png",
            live: null,
            github: "https://github.com/ashleytrollinger/Weather-Dashboard"
        },
        {
            name: "Password Generator",
            description: "Enter in criteria for a passowrd and the computer will generate a random one that meets all the requirements!",
            image: "Password-Generator.png",
            live: null,
            github: "https://github.com/ashleytrollinger/JavaScript-Password-Generator"
        },
        {
            name: "Coming End of July",
            description: "Social media platform that combines the music focus of Spotify with the social aspects of Instagram",
            image: "Work-In-Progress.png",
            live: null,
            github: null
        },

    ]


    return (
        <section>
            <div className="center">
                <h1>My Portfolio</h1>
            </div>
            <div>
                <ul className="flex-row">
                    <li className="padding">
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[1]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[2]}></Project>
                    </li>

                    <li className="padding">
                        <Project projects={projects[3]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[4]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[5]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;