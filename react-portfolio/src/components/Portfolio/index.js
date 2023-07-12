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
        }
    ]
    /* For the last 3 projects
    {
        name: "Weather Dashboard",
        description: "Works with OpenWeatherMap to create a 7 day weather forcaster",
        image:"Weather-Dashboard.png",
        live:null,
        github:"https://github.com/ashleytrollinger/Weather-Dashboard"
        },
        {
        name: "Password Generator",
        description: "",
        image:"",
        live:"",
        github:""
        },
        {
        name: "",
        description: "",
        image:"",
        live:"",
        github:""
        },
        */



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
                    {/* For the Last 3 Projects
                    <li className="padding">
                        <Project projects= {projects[0]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects= {projects[0]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects= {projects[0]}></Project>
                    </li> */}
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;