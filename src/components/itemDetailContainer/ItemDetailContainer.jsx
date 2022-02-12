import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import Loanding from "../loading/loading";


import { getFirestore } from "../../firebase/firebase";

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const {id} = useParams()
    
    


    useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos")
    //PONER ACA EL ID DE SU DOCUMENTO
    const miItem = itemCollection.doc(id);

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
        setProducto({ id: doc.id, ...doc.data() });
    })
        .catch((err) => {
        console.log(err);
    });
}, []);

    return <div className="EstItemList"> { (producto.id)?<ItemDetail  producto={producto}/>:<Loanding />}</div>;

}