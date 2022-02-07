import React,{useState, useEffect} from 'react';
import ItemList from '../itemlist/ItemList';
import Loanding from '../loading/loading';
import data from'./../../Data/productos.json';

import { getFirestore } from './../../firebase/firebase'

export default function ItemListContainer () {
    const [producto, setProducto] = useState({});

    useEffect(() => {

    const db = getFirestore();

    const itemCollection = db.collection("productos")
    //.where('category', '==', 'adidas');

    itemCollection.get()
        .then((querySnapShot) => {

        if (querySnapShot.size == 0) {
            console.log('no hay documentos con en ese query');
            return
        }

        console.log('hay documentos');

        //console.log(querySnapShot.docs);

        setProducto(querySnapShot.docs.map((doc)=> {
            return { id: doc.id, ...doc.data() }
        }
        ));
        
    })
        .catch((err)=>{
        console.log(err);
    })
}, [])


    return (
        <div >
            
            {
                (producto.length > 0)?
                <ItemList producto={producto} />
                : 
                <Loanding/>
            }

            
        
            </div>

    )
}