import React from "react";
import ghIcon from '../../assets/imgs/github.png';
import emailIcon from '../../assets/imgs/email.png';
import liIcon from '../../assets/imgs/linkedin.jpg';

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