import React from "react";


const projects = [
    {
        title: "Weather App",
        description: "React App",
        liveLink: "https://weatherapptask-raj-kushwahas-projects.vercel.app/",
    },
    {
        title: "Digiigrow",
        description: "Website",
        liveLink: "https://digiigrow.com",
    },
    {
        title: "Oroface",
        description: "Website",
        liveLink: "https://oroface.in/",
    },
    {
        title: "Mahest Interior",
        description: "Website",
        liveLink: "https://maheshinteriordesign.com/",
    },
    {
        title: "Amphelio Green",
        description: "Website",
        liveLink: "https://www.ampheliogreenenergy.com/",
    },
    {
        title: "Dr Sharif..",
        description: "Website",
        liveLink: "https://www.drshariforthopedicarthroscopicsurgeon.com/",
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
