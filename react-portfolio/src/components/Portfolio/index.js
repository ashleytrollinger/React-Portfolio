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
            image: "Jesry-Shore.png",
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
        name: "",
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
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[0]}></Project>
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