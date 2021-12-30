import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import HomeMessage from '../../components/HomeMessage/HomeMessage';
import LogoImg1 from '../../components/LogoImg1/LogoImg1';

 const Main = () => {
    return (
        <div>
            <Navigation />
            <div id='home-container' style={{backgroundColor:'darkgray', margin:'5em', opacity:'.5'}}>
                <div id='container' style={{display:'flex', justifyContent:'center'}}>
                    <h1 style={{textShadow:'1px 2px 2px rgba(193,219,212,0.88)'}}>QBabyMusic</h1>
                </div>
                <div id='container' style={{display:'flex', justifyContent:'center'}}>
                    <HomeMessage />
                    <LogoImg1 />
                </div>
            </div>
        </div>
    )
}

export default Main;