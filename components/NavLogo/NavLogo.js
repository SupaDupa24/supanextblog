import React from 'react';
import qmfb13 from '../../assets/qmfb13.jpg';

const NavLogo = () => {
    return(
        <div id='nav-container' style={{marginRight:'40em'}}>
                <img alt='high-rise' src={qmfb13} style={{ height: 60, width: 60 , float: 'left'}} />
        </div>
    )
}

export default NavLogo;