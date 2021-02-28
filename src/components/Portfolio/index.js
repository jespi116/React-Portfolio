import React, { useState } from "react";
import Projects from '../Projects';

//component for portfolio page

function Portfolio(){

    const [projects] = useState([
        {
            name: 'Run Buddy',
            technologies: 'HTML/CSS',
            link: "https://jespi116.github.io/run-buddy/",
            repo: "https://github.com/jespi116/run-buddy",
            src: "runbuddy.png"
        },
        {
            name: 'Home Plate',
            technologies: 'HTML/CSS/JS/SQL',
            link: "https://homeplate-12345.herokuapp.com/",
            repo: "https://github.com/jespi116/Home-Plate",
            src: "homeplate.png"
        },
        {
            name: 'Weather Dashboard',
            technologies: 'HTML/CSS/JS/API',
            link: "https://jespi116.github.io/weather-dashboard/",
            repo: "https://github.com/jespi116/weather-dashboard",
            src: "Weather.png"
        },
        {
            name: 'The VirtualYardSale',
            technologies: 'MERN Stack',
            link: "https://vysale.herokuapp.com/",
            repo: "https://github.com/jespi116/vysale",
            src: "vys.png"
        },
        {
            name: 'Shop Shop',
            technologies: 'MERN Stack',
            link: "https://enigmatic-island-98076.herokuapp.com/",
            repo: "https://github.com/jespi116/shop-shop",
            src: "shop-shop.png"
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