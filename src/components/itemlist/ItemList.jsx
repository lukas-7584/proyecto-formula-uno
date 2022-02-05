import React from 'react';
import Item from '../item/Item';
import './itemList.css'

export default function ItemList({producto}) {

    return(

        <div className='EstItemList'>
    {
        producto.map((e,i)=><Item producto={e} key={i} />)
    
    }
        </div>
    )
}
