import React from "react";
import cssClass from './BuildControl.module.css';
const buildControl =(props) =>(
    <div className={cssClass.BuildControl}>
        <div className={cssClass.Label}>
            {props.label}
        </div>
        <button className={cssClass.Less} disabled ={props.disable} onClick={props.removed}>Less</button>
        <button className={cssClass.More} onClick={props.added}>More</button>
        
    </div>
);



export default buildControl;