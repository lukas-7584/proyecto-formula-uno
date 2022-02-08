import React,{useState, useEffect} from "react";
import { BrowserRouter, Switch, Route, usuParams, useParams, Link} from 'react-router-dom';
import data from'../Data/productos.json' 
import ItemList from "./itemlist/ItemList";
import ItemListContainer from "./itemListContainer/ItemListContainer";
import { getFirestore } from "../firebase/firebase";


export default function Categoria(){

    const {categoriaId} = useParams();
    const [cascos, setCascos] = useState([])
    
    useEffect(()=>{

        const db = getFirestore()
        const itemCollection = db.collection("productos")

        const miItem = itemCollection.doc(categoriaId)
    
        miItem.get()
        .then((doc) => {
        /* console.log(doc.data());
            console.log(doc.id);
          console.log({ id: doc.id, ...doc.data() }); */

        if (!doc.exists) {
            console.log("no existe ese documento");
            return;
        }

        console.log("item found");
        setCascos({ id: doc.id, ...doc.data() });
    })
        .catch((err) => {
        console.log(err);
    });
    

    },[])

    return(

        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <Link to={'/categoria/CF'} className="nav-link" aria-current="page">Casco de Fangio</Link>
                        <Link to={'/categoria/CH'} className="nav-link" href="#">Casco de Hamilton</Link>
                        <Link to={'/categoria/CS'} className="nav-link" href="#">Casco de Sena</Link>
                        <Link to={'/categoria/CR'} className="nav-link" href="#">Casco de Reuteman</Link>

                    </div>

                </div>

            </div>

        </nav>
        {/* <Link to={'/categoria/CF'}>casco de Fagio</Link> <br />
        <Link to={'/categoria/CH'}> casco de Hamilton</Link> <br />
        <Link to={'/categoria/CS'}> casco de Sena</Link><br />
        <Link to ={'/categoria/CR'}> cascos de reuteman</Link><br /> */}
        
        {/* Estoy en la categoria {categoriaId} */}
{/*         
        {
            cascos.map(item => <div>{item.nombre}</div>)
        } */}

    
        <ItemListContainer/>
        <ItemList producto={cascos} />

        </>
    ) 
}