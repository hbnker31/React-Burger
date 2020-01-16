import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png';
import cssClass from './Logo.module.css';

const logo= (props)=> (
    <div className={cssClass.Logo} >
        <img src={burgerLogo} alt='LogoImage'/>
    </div>
);

export default logo;