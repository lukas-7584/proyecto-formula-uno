import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';
import data from'../Data/productos.json'
import ItemDetail from "./ItemDetail";
import Loanding from "./loading/loading";



export default function ItemDetailContainer (){
    
    const{id} = useParams ();

    const [producto,setProducto] = useState({});

    useEffect(()=>{
        
        const GetItem = new Promise((resolve, reject) =>{
            setTimeout(()=>{
            const res = data.filter((e)=>e.id===id)
            resolve(res[0])
            

            // (listadoDeProductos.filter(item=>item.id==item)[0])


        },2000);
        });

        GetItem.then((res)=>{
            setProducto(res)
        })
        GetItem.catch((err)=>{
            setProducto((err))
        })
        // setTimeout(()=>{
        //     const res = data.filter((e)=>e.id===id)
        //     setProducto(res[0])
            

        //     // (listadoDeProductos.filter(item=>item.id==item)[0])


        // },2000)
    },[]);



    return <div className="EstItemList"> { (producto.id)?<ItemDetail  producto={producto}/>:<Loanding />}</div>;

        
        
    
}