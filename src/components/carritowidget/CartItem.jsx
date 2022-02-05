import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap'
import { cartContext } from '../../context/CartProvider';


const CartItem = ({prod}) => {

    const {deleteItem} = useContext(cartContext)
    
    return (
        
        
            <div > 

                <Card className='card'>

                            <Card.Body>
                            <Card.Img variant="top" src={prod.item.imagen} style={{width:'150px'}}/>
                                <Card.Title className='padding'>Articulo: {prod.item.nombre}</Card.Title>
                                <Card.Title className='padding'> Codigo N°: {prod.item.id}</Card.Title>
                                <Card.Title className='padding'>Cantidad de Unidades: {prod.contador}</Card.Title>
                                <Card.Title className='padding'>  {prod.item.precio}</Card.Title>
                                <Button variant="danger" onClick={() => deleteItem(prod.item.id)}>Eliminar Producto</Button>

                </Card.Body>

                    </Card>
                            
                {/* <h3>{prod.item.nombre}</h3>
                <p>{prod.item.id}  </p>
                <p> quantity:{prod.contador}</p>

             */}

            </div>

    )
};

export default CartItem;
