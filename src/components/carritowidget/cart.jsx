import React, { useContext, useState, useEffect } from 'react';
import { cartContext } from '../../context/CartProvider';
import CartItem from './CartItem';
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import OrdenCompra from './ordenDeCompra';



const Cart = () => {

        const {cart, clearCart,  sumarTodo, sumarCantidad } = useContext(cartContext);
        

        const [total, setTotal] = useState(0);
        


        useEffect(() => {
                setTotal(sumarTodo());
                
        },[cart])

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
                                <div><h2> Total a Pagar: ${sumarTodo ()}</h2></div>

                                <Button variant="danger" onClick={() => clearCart()}>Limpiar Carrito</Button><br /><br />
                                <OrdenCompra/>

                                
                        </div>


                                
                                
                }

                        
                </>
        )
}

export default Cart;
