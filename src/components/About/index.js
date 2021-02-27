import React from "react";
import img from '../../assets/imgs/me.jpg'

//component about me

function About(){
    return(
        <section className="mx-5">
            <h1 className="my-3">About Me</h1>
            <img src={img} alt="Javier" className="img"/>
            <p className="my-3 p">
                Full Stack Web Developer seeking to make the user experience as pleasant and seamless as possible. I earned my bachelor's degree from Florida International University and a Web Development certificate from the University of Central Florida. I have developed proficient critical thinking skills in my time in university as well as new skills such as, Javascript, HTML, CSS, and React.js from my time earning the WD certificate. All of these skills along with my drive to create stunning web pages and my experience of working alongside team members, whether it be a coding project or a science lab setting, allow me to excel in any work environment. I look forward to putting these skills to the test and learning even more through experience. Miami, FL Native moving to the Oralndo Area.
            </p>
            <p className="p">
                This Site was programmed and designed by me personally, using tools such as HTML, CSS, JAVASCRIPT, React.js, and more. Clicking on the tabs in the top right will take you to some of my past projects, my resume, and a contact form as an easy way to reach me. At the bottom of the page there are links to my GitHub, Email, and Linkedin page. Feel free to use any of these means of communication to reach out to me with any inquiries or opportunities. Please enjoy what my website has to offer!
            </p>
        </section>
    );
}

export default About;