import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cssClass from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch(this.props.type){
            case ('bread-bottom'):
                ingredient =<div className={cssClass.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = 
                <div className={cssClass.BreadTop}>
                    <div className={cssClass.Seeds1}></div>
                    <div className={cssClass.Seeds2}></div>
                </div>;
                break;
            case ('cheese'):
                ingredient =<div className={cssClass.Cheese}></div>;
                break;
            case ('salad'):
                ingredient =<div className={cssClass.Salad}></div>;
                break;
            case ('bacon'):
                ingredient =<div className={cssClass.Bacon}></div>;
                break;
            case ('meat'):
                ingredient =<div className={cssClass.Meat}></div>;
                break;
            default:
                ingredient= null;
        } 
        return ingredient;
    }
}

    BurgerIngredient.propTypes= {
        type: PropTypes.string.isRequired
    
};

export default BurgerIngredient;