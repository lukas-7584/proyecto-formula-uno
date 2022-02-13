import React,{useState, useEffect,useRef,useContext} from "react";
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import firebase from "firebase";
import { getFirestore } from "../../firebase/firebase";
import { cartContext } from "../../context/CartProvider";

export default function OrdenCompra() {

    const [orderId, setOrderId] = useState('');
    const { sumarTodo, cart, } = useContext(cartContext);
    const [finalizarCompra, setFinalizarCompra] = useState(true)

    const nameRef = useRef();
    const addressRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    function  graciasPorSuCompra(){
        setFinalizarCompra(false)
    }

    function handleClick() {

        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                address: addressRef.current.value,
                state: stateRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,
            },
            items: cart,
            total: sumarTodo(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(miOrden)
            .then(({ id }) => {
                console.log('orden ingresada: ' + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            });

                
                graciasPorSuCompra()
    }

    return (

        <>

        {finalizarCompra ?


            
                <form onSubmit={(event) =>event.preventDefault()}> 

                <h3>Ingresa tus datos</h3>

                <input type="text" name="name"  ref={nameRef} placeholder="Nombre y Apelllido" required />
                <br />

                <input type="tel" name="número de teléfono" ref={mobileRef} placeholder="Ingrese su número de teléfono"  required/>
                <br />

                <input type="email" name="email" ref={emailRef} placeholder="Email" required />
                <br />

                <input type="text" name="state" ref={stateRef} placeholder="Provincia" required />
                <br />

                <input type="text" name="address" ref={addressRef} placeholder="Direccion" required  />
                <br />

                <button type="submit" onClick={() => handleClick() } >Finalizar Compra!!</button>

                </form>

                :
                <div>
                    <h4>Gracias por elegirnos !!! {orderId && (<h1 className="felicita">Felicitaciones tu orden es {orderId}</h1>)} </h4>

                    <Link to='/'><Button variant="success">A seguir comprando!!</Button></Link>
                </div>
            
        }
        </>
    );
}