import React, { useState } from "react";
import Projects from '../Projects';


function Portfolio(){

    const [projects] = useState([
        {
            name: 'Run Buddy',
            technologies: 'HTML5/CSS3',
            link: "https://jespi116.github.io/run-buddy/",
            repo: "https://github.com/jespi116/run-buddy",
            src: "runbuddy.png"
        },
        {
            name: 'Home Plate',
            technologies: 'HTML/CSS/JAVASCRIPT/SQL',
            link: "https://homeplate-12345.herokuapp.com/",
            repo: "https://github.com/jespi116/Home-Plate",
            src: "homeplate.png"
        }
    ])

    return(
        <section className='mx-5'>
            <h1>Portfolio</h1>
            <div className="flex-row">
                {projects.map((project) => (
                    <Projects
                        project = { project }
                        key = { project.name }
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio