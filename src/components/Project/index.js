import React from 'react';

function Project() {

    const projects = [
        {
            className: "project-1",
            name: "Moodsic",
            description: "Group Project 1",
            github: "https://github.com/raymondjestrada/GroupProject1",
            deploy: "https://k-kelsey.github.io/GroupProject1/",
        },
        {
            className: "project-2",
            name: "Fantasy Football Quiz",
            description: "Code Quiz",
            github: "https://github.com/raymondjestrada/homework-week-4",
            deploy: "https://raymondjestrada.github.io/homework-week-4/"
        },
        {
            className: "project-3",
            name: "Weather Dashboard",
            description: "Assignment: Weather Dashboard",
            github: "https://github.com/raymondjestrada/homework-week-6",
            deploy: "https://raymondjestrada.github.io/homework-week-6/"
        }
    ]

    return (
        <section className="content-section project-section">
            <div className="grid-container">
                {projects.map((project) => (
                    <div 
                        className={`project-item-wrapper ${project.className}`}
                        key={project.className}
                    >
                        <div className="project-content">
                            <a href={project.deploy} target="_blank" rel="noreferrer" className="project-title">{project.name}</a>
                            <div className="project-description">{project.description}</div>
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <i className="fa fa-github github-link"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Project;