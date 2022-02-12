import React from 'react';
import { Button, Card } from 'react-bootstrap'
import './item.css'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


export default function Item({ producto }) {


    return (
        <Card className='card'>
                <Link to={`/item/${producto.id}`}><Card.Img variant="top" src={producto.imagen}/></Link>
            
            <Card.Body>
                <Card.Title className='padding'>{producto.nombre}</Card.Title>

                <Link to={`/item/${producto.id}`}><Button variant="danger">Ver Detalle</Button></Link><br /> <br />

                
                

                
            </Card.Body>

        </Card>
    
    );
};
