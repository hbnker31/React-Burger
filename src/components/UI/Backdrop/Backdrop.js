import React from 'react';
import cssClass from './Backdrop.module.css'
const backdrop = (props) => (
    props.show? <div 
                    onClick={props.clicked}
                    className={cssClass.Backdrop}></div>: null

)
export default backdrop;