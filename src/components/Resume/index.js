import React from 'react'

function Resume(){
    return(
        <section className="mx-5 my-3">
            <h1>Resume</h1>
            <h2><a className="res" href="https://docs.google.com/document/d/1QOTK-O-ba4JcvnQr0m0Wj2YMJEzB4WcTiMr4mHtC4qI/edit?usp=sharing">Resume Link</a></h2>
            <br/>
            <h3>Front-End Proficiencies</h3>
            <ul className="ul">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>jQuery</li>
                <li>Resonsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-End Proficiencies</h3>
            <ul className="ul">
                <li>API's</li>
                <li>Node</li>
                <li>Express</li>
                <li>MYSQL, sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQl</li>
            </ul>
        </section>
    );
}

export default Resume;