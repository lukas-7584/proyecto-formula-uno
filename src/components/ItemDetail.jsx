import React,{useState,useEffect, useContext} from "react"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap'
import Counter from './contador/Contador';
import  "./itemlist/itemList.css";
import { cartContext } from "../context/CartProvider";

export default function ItemDetail ({producto}){


    const [mostrarContador, setMostrarContador] = useState(true);

    const {addToCart} = useContext(cartContext);

    function onAdd(Contador){
        alert("Se van agregar:  " + Contador + "  " + "productos");
        addToCart(producto, Contador);
        setMostrarContador(false);
    } 


    return(
        <>
        <Card className='Card'>
            <Card.Img variant="top" src={producto.imagen}/>
            <Card.Body>
                <Card.Title className='padding'>{producto.title}</Card.Title>
                <Card.Text className='padding'>
                        $ {producto.precio}
                </Card.Text>

                <Card.Text className='padding'>
                    {producto.descripción}
                </Card.Text>

                <Card.Text className='padding'> 
                categoria:{producto.categoría}
                </Card.Text>
                
                <Card.Text className='padding'> 
                codigo:{producto.id}
                </Card.Text>

                
            </Card.Body>

            {
                (mostrarContador)?
                    <Counter  stock={10} initial={0} onAdd={onAdd}/>
                :
                    <Link to={'/carrito'}> <div className="text-center"><Button variant="success" > Ir Finalizar la Compra </Button></div></Link>
            }
            
        </Card>
    
        </>
    )
}
