import React, { Component } from 'react'
import CartColumns from './CartColumns';
import EmptyCart from './EmpryCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0){
                            return(
                                <React.Fragment>
                                    
                                    <h1 className='text-center m-5 text-title'>Your <strong className='text-blue'>Cart</strong></h1>

                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                </React.Fragment>
                            )
                        } else {
                            return(
                                <EmptyCart />
                            )

                        }
                    }}
                </ProductConsumer>
                
            </section>
        )
    }
}
