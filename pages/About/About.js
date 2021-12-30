import React from 'react';
import Navigation from '../../components/Navigation/Navigation';


 const About = () => {
    return (
        <div>
            <Navigation />
                <div id='container' style={{display:'flex', justifyContent:'center'}}>  
                <h1 style={{textShadow:'1px 2px 2px rgba(193,219,212,0.88)'}}>About</h1>
                </div>
        </div>
    )
}

export default About;