import React, { useContext, useState } from 'react';
import { cartContext } from '../../context/CartProvider';
import CartItem from './CartItem';
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';



const Cart = () => {

        const {cart, clearCart} = useContext(cartContext);
        // console.log(cart)

        return (

                <>

                { cart.length === 0 ?
                        <div className='vacio'>
                                <p>Empty Cart</p>
                                <Link to='/'><Button variant="success">Vamos a Comprar!!</Button></Link>
                        </div>
                        :
                        <div>
                                {cart.map(element => < CartItem key={element.item.id} prod={element}/> )}

                                <Button variant="danger" onClick={() => clearCart()}>Limpiar Carrito</Button>
                        </div>
                }

                </>
        )
}

export default Cart;
