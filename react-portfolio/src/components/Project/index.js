import React from "react";

function Project() {
    const projects = [
        {
            name: "Employee Tracker",
            description: "Track different departments, employees, roles and salaries all on one database.",
            image: "employee-tracker.PNG",
            live: null,
            github: "https://github.com/ashleytrollinger/Employee-Tracker"
        },
        {
            name: "Jersey Shore Quiz",
            description: "Test your knowledge on the MTV hit show Jersey Shore.",
            image: "Jesry-Shore.PNG",
            live: null,
            github: "https://github.com/ashleytrollinger/Jersey-Shore-Quiz-Game"
        }
    ];
    return (
        <section>
            <h2>Projects</h2>
        </section>
    )
}