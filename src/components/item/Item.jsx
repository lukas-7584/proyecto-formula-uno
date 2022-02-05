import React from 'react';
import { Button, Card } from 'react-bootstrap'
import './item.css'
import Counter from '../contador/Contador';
import ItemDetailContainer from '../ItemDetailContainer';
import ItemDetail from '../ItemDetail';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


export default function Item({ producto }) {

    // const { nombre, precio, descripcion, imagen } = item

    
    // function onAdd(){
    //     alert("Item added");
    // }

    return (
        <Card className='card'>
                <Link to={`/item/${producto.id}`}><Card.Img variant="top" src={producto.imagen}/></Link>
            
            <Card.Body>
                <Card.Title className='padding'>{producto.nombre}</Card.Title>
                {/* <Card.Text className='padding'>
                    {precio}
                </Card.Text> */}
                <Link to={`/item/${producto.id}`}><Button variant="danger">Ver Detalle</Button></Link><br /> <br />
                {/* <Link to ={'/item/${data.id}'}> Ver detalle</Link> */}
                
                

                
            </Card.Body>
            {/* <Counter  stock={10} initial={0} onAdd={onAdd}/> */}
        </Card>
    
    );
};
