import React from 'react';
import About from '../About'
import Portfolio from '../Portfolio'
import Contact from '../Contact';
import Resume from '../Resume';

function Body(props){
    const { currentCategory } = props;

    function renderContent(){
        const { name } = currentCategory;

        if(name === 'Portfolio'){
            return <Portfolio />
        } else if(name === 'Contact'){
            return <Contact />
        } else if(name === 'Resume'){
            return <Resume />
        } else {
            return <About />
        }
    }

    return(
        <div>
            {renderContent()}
        </div>
    );
}

export default Body;