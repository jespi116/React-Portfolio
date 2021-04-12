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
            src: "runbuddy.png",
            desc: 'Front End page that displays some serious CSS skills!'
        },
        {
            name: 'Shop Shop',
            technologies: 'MERN Stack',
            link: "https://enigmatic-island-98076.herokuapp.com/",
            repo: "https://github.com/jespi116/shop-shop",
            src: "shop-shop.png",
            desc: 'Full Stack e-commerce site using mongoDB and Redux'
        },
        {
            name: 'Home Plate',
            technologies: 'HTML/CSS/JS/SQL',
            link: "https://homeplate-12345.herokuapp.com/",
            repo: "https://github.com/jespi116/Home-Plate",
            src: "homeplate.png",
            desc: 'Full Stack e-commerce site for Sporting goods that uses MySQL!'
        },
        {
            name: 'Pizza Hunt',
            technologies: 'HTML/CSS/JS/NOSQL',
            link: 'https://pacific-lowlands-31234.herokuapp.com/',
            repo: 'https://github.com/jespi116/pizza-hunt',
            src: 'pizza-hunt.png',
            desc: 'Full Stack Webpage for pizza enthusiasts to find and share new pizza recipes!'
        },
        {
            name: 'Weather Dashboard',
            technologies: 'HTML/CSS/JS/API',
            link: "https://jespi116.github.io/weather-dashboard/",
            repo: "https://github.com/jespi116/weather-dashboard",
            src: "Weather.png",
            desc: 'Front End Webpage for displaying weather forecasts in the user\'s city of choice powered by openweathermap.org\'s weather api.'
        },
        {
            name: 'The VirtualYardSale',
            technologies: 'MERN Stack',
            link: "https://vysale.herokuapp.com/",
            repo: "https://github.com/jespi116/vysale",
            src: "vys.png",
            desc: 'Full Stack PWA meant for users to buy and sell used items!'
        }
    ])

    return(
        <section className='mx-5'>
            <h1>Portfolio</h1>
            <h3>hover over an image to see an overview of the project</h3><h3> Click on the title or GitHub icon to be taken to the active site or the repository of that project!</h3>
            <div className="flex-row flex-start">
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