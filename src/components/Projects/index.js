import React from "react";
import icon from '../../assets/imgs/github.png'

//component for displaing the mapped project array passed from the portfolio component

function Projects({project}){
    const { name, technologies, link, repo, src, desc } = project;

    return(
        <div className="container">
            <div className="project-container">
                <img className="project-img" src={require(`../../assets/imgs/${src}`).default} alt={name} />
                <div className="project-text">
                    <div>
                        <a href={link} className='project-link bold'>{name}</a>
                        <a href={repo} className='repo-link'>
                            <img src={icon} alt='repository link' />
                        </a>
                        
                    </div>
                    <p className="tech bold">{technologies}</p>
                    <p className="desc">{desc}</p>
                </div>
                
            </div>
        </div>
    );
}

export default Projects