import React,{useState, useEffect} from 'react';
import ItemList from '../itemlist/ItemList';
import Loanding from '../loading/loading';
import data from'./../../Data/productos.json';




export default function ItemListContainer () {


    const [producto, setProducto] = useState ([])



    useEffect(() => {

        const ItemList = new Promise((resolve, reject) => {
            setTimeout(() => {
                //reject('server caido');
                resolve ( data )            
            }, 2000)
        });
            ItemList
                .then((ItemList) => setProducto(ItemList))
                .catch((err) =>console.log(err));


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