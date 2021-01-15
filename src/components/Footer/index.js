import React from "react";
import ghIcon from '../../assets/imgs/github.png';
import emailIcon from '../../assets/imgs/email.png';
import liIcon from '../../assets/imgs/linkedin.jpg';

//component with links to my github, email, and will update the linkedin when I create one soon

function Footer(){
    return(
        <footer className="container">
            <a href="https://github.com/jespi116">
                <img src={ghIcon} alt='github link' />
            </a>
            <a href="mailto: jaaavier12333@gmail.com">
                <img src={emailIcon} alt='email link' />
            </a>
            <a href="https://linkedin.com">
                <img src={liIcon} alt='linkedin link' />
            </a>
        </footer>
    );
}

export default Footer;