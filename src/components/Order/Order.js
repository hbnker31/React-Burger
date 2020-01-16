import React from 'react';
import cssClass from './Order.module.css';
const order= (props) => {
    const ingredients=[];

    for(let ingredientName in props.ingredients){
        ingredients.push(
            {
                name: ingredientName, 
                qty: props.ingredients[ingredientName]
            }
        )
    }
    const ingredientOutput= ingredients.map(ig=> {
        return ( 
            <span 
                style={{
                    textTransform: 'capitalize',
                    
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'space-around',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    borderSizing: '100px',
                    padding: '5px',
                    textAlign: 'justify'
                }}
                key={ig.name} > {ig.name} ------ x {ig.qty} 
            </span>
    )}) 
    return (
        <div className={cssClass.Order}>
            <p> Ingredients: {ingredientOutput} </p>
            <p> Price: <strong>$ {Number.parseFloat(props.price).toFixed(2)} </strong></p>
        </div>
    )
}
export default order;