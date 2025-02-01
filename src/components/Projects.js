import React from "react";


const projects = [
    {
        title: "Digiigrow",
        description: "A Digital ",
        liveLink: "https://digiigrow.com",
    },
    {
        title: "E-Commerce Dashboard",
        image: "images/project2.png",
        description: "A fully functional e-commerce admin panel.",
        liveLink: "https://ecommerce.com",
    },
]
    

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-title">
                <h1>
                    Deployed Realities
                </h1>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <iframe
                            src={project.liveLink}
                            className="project-iframe"
                            title={project.title}
                            loading="lazy"
                        ></iframe>
                        <div className="project-overlay">
                            <h3>{project.title}</h3>
                            {/* <p>{project.description}</p> */}
                            <div className="project-links">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                    🌐 Live Demo
                                </a>
                                
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Projects;
