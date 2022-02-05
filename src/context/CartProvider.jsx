import React, { createContext, useState } from 'react';

export const cartContext = createContext();

const CartProvider = ({children}) => {

        const [cart, setCart] = useState ([]);

        const addToCart = (producto,contador) =>{
                if (isInCart(producto.id)){
                        const indexItem = cart.findIndex(ele => ele.item.id === producto.id);
                        cart[indexItem].contador = cart[indexItem].contador + contador;
                        setCart([...cart]);
                }else{
                        setCart([...cart, { item:producto, contador}])
                }
                
        }


        const deleteItem = (id) =>{
                const updateCart = cart.filter(element => element.item.id !== id)
                setCart(updateCart);
        }

        const isInCart = (id) => {
                return cart.some(element =>element.item.id === id)
        }

        const clearCart = () => {
                setCart([])
        }

                return( 

                <cartContext.Provider value={{ cart, addToCart, deleteItem, clearCart}}>
                        {children}
                </cartContext.Provider>
                        );
};

export default CartProvider;
