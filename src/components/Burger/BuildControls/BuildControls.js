import React from 'react'; 
import cssStyle from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'}
]
const buildControls= (props) =>(
    <div className={cssStyle.BuildControls}>
        <p>Current Price: <strong>$ {props.price.toFixed(2)} </strong></p>
        {controls.map(ctrl=>(
            <BuildControl 
            key={ctrl.label} 
             
            label={ctrl.label}
            added={() =>props.ingredientAdded(ctrl.type)}
            removed={() =>props.ingredientRemoved(ctrl.type)}
            disable={props.disabled[ctrl.type]} />        
        ))}
        <button className ={cssStyle.OrderButton}
         onClick={props.purchasing}
         disabled={!props.purchasable}>
         {props.isAuth? 'ORDER NOW': 'SIGN UP TO ORDER'}</button>
    </div>

)
export default buildControls;