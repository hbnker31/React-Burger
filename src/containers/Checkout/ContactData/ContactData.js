import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import cssClass from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';
import { updateObject, checkValidity} from '../../../shared/utility';

class ContactData extends Component{
    state={
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation:{
                    required: true
                },
                valid:  false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder: 'Street'
                },
                value: '',
                validation:{
                    required: true
                },
                valid:  false,
                touched: false
            },
            pinCode:{
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder: 'Pincode'
                },
                value: '',
                validation:{
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid:  false,
                touched: false
             },
            country: {
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder: 'Country'
                },
                value: '',
                validation:{
                    required: true
                },
                valid:  false,
                touched: false
            },
            email:{
                elementType: 'input',
                elementConfig: {
                    type:'email',
                    placeholder: 'Your E-mail'
                },
                value: '',
                validation:{
                    required: true
                },
                valid:  false,
                touched: false
            },
             deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest', 
                valid: true
            }
        },
        formisValid: false

    }
    OrderHandler=(event)=>{
        event.preventDefault();
        const formData={};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier]=this.state.orderForm[formElementIdentifier].value;
        }
        const order={
            ingredients: this.props.ings,
            price: this.props.price.toFixed(2),
            orderData:formData,
            userId: this.props.userId
        }
        this.props.onOrderBurger(order, this.props.token);
        
        

    }
    inputChangedHandler=(event, inputIdentifier) =>{
       const updatedFormElement= updateObject(this.state.orderForm[inputIdentifier], {
            value:event.target.value,
            touched: true,
            valid: checkValidity(event.target.value,          this.state.orderForm[inputIdentifier].validation)
        });
        const updateOrderForm=updateObject(this.state.orderForm, {
            [inputIdentifier]: updatedFormElement  
        } );
        let formIsValid=true;
        for(let inputIdentfiers in updateOrderForm){
            formIsValid= updateOrderForm[inputIdentfiers].valid &&formIsValid;
            
        }


        
        this.setState({orderForm: updateOrderForm, formisValid:formIsValid});
    }
    render(){
        const formElementsArray=[];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form=(<form onSubmit ={this.OrderHandler}>
                    {formElementsArray.map(formElement =>(
                        <Input
                            key={formElement.id}
                            changed={(event) =>this.inputChangedHandler(event, formElement.id)}
                            shouldValidate={formElement.config.validation}
                            elementType={formElement.config.elementType}
                            invalid={!formElement.config.valid}
                            touched={formElement.config.touched}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value} 
                            />
                    ))}
                    <Button btnType="Success" disabled={!this.state.formisValid}>ORDER</Button>
                </form>);
        if(this.props.loading){
            form=<Spinner />;
        }
        return (
            <div className={cssClass.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }
}
const mapStateToProps=state =>{
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.orders.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onOrderBurger:(orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));