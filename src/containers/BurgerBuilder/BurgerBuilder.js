import React, {Component} from 'react';
import {connect} from 'react-redux';
import Auxx from '../../hoc/Auxx/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
import Spinner from  '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

export class BurgerBuilder extends Component{
    state={
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false

    }
    componentDidMount() {
        this.props.onInitIngredients();
        
    }
    compponent
    updatePurchaseState (ingredients) {
       
        const sum=Object.keys(ingredients).map(igkey =>{
            return ingredients[igkey];
        }).reduce((sum,el) =>{
            return sum+el;
        },0);
        return sum>0 ;
    }
    purchaseHandler=()=> {
        if(this.props.isAuthenticated){
            this.setState({purchasing: true});
        }else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
        
    }
    
    purchaseCancelHandler =() =>{
        this.setState({purchasing:false });
    }
    purchaseContinueHandler =() =>{
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
        
    }
    render() {
        const disabledInfo={
            ...this.props.ings
        }
        for( let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <=0
        }
        let orderSummary= null;
        
        let burger=this.props.error? <p>Ingredients can't be loaded!!!</p>:<Spinner />
        if(this.props.ings){
            burger=(
            <Auxx> 
                <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded} 
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasing={this.purchaseHandler}
                        isAuth= {this.props.isAuthenticated}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        price={this.props.price}/>
            </Auxx>
            );
            orderSummary=<OrderSummary 
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    ingredients={this.props.ings}
                    price= {this.props.price}/>
            if(this.state.loading) {
                orderSummary=<Spinner />
            }
        }
        return (
            <Auxx >
                <Modal show={this.state.purchasing}
                        modalClosed={this.purchaseCancelHandler} >
                    {orderSummary}
                </Modal>
                {burger}
            </Auxx>
        )
    }
}
const mapStateToProps=state=>{
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error, 
        isAuthenticated: state.auth.token!== null
    }
}
const mapDistpatchToProps=dispatch =>{
    return{
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () =>dispatch(actions.initIngredients()),
        onInitPurchase: () =>dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) =>dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDistpatchToProps) ( withErrorHandler(BurgerBuilder,axios));