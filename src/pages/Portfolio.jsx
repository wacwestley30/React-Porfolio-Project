/*
- WHEN I am presented with the Portfolio section
- THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
*/

import { projects } from "../utils/PortfolioProjects";

export default function Portfolio() {
    return (
        <div className="container">
            <h1 className="my-4">Portfolio</h1>
            <div className="row">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <a href={project.githubLink} target="_blank">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="card-img-top"
                                    />
                                </a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="card-link">GitHub.com/{project.title}</a>
                                <br />
                                {project.videoLink ? (
                                    <a href={project.videoLink} target="_blank" rel="noopener noreferrer" className="card-link">Video Demo</a>
                                ) : project.deployedLink ? (
                                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="card-link">Live Demo</a>
                                ) : <br/>}
                                <ul className="mt-3 text-lightBrown">
                                    {project.description.map((desc, idx) => (
                                        <li key={idx}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}