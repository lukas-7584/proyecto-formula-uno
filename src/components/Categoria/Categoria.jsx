import React,{useState, useEffect} from "react";
import { BrowserRouter, Switch, Route, usuParams, useParams, Link} from 'react-router-dom';
import ItemList from "../itemlist/ItemList";
import ItemListContainer from "../itemListContainer/ItemListContainer";
import { getFirestore } from "../../firebase/firebase";


export default function Categoria(){

    const {categoriaId} = useParams();
    const [cascos, setCascos] = useState([])
    
    useEffect(()=>{

        const db = getFirestore()
        const itemCollection = db.collection("productos")

        const miItem = itemCollection.where("categoría", "==", categoriaId)
    
        miItem.get()
        .then((snap) => {
        

        console.log(snap.docs);
        setCascos(snap.docs.map((doc)=>{return {id:doc.id,...doc.data()}}));
    })
        .catch((err) => {
        console.log(err);
    });
    

    },[categoriaId])
        console.log(cascos)

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

    
        <ItemListContainer/>
        <ItemList producto={cascos} />

        </>
    ) 
}