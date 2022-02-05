import React, {useState} from 'react';

function Counter (props) {
    const [contador, setContador] = useState(props.stock > 0 ? 0 : props.initial);
    return (
        <>

            
            <div className= 'card mt-4 conta'>

                <div className="d-flex justify-content-center card-body" >
                    <button type="button" class="btn btn-danger" disabled ={contador >= props.stock} onClick={() => setContador(contador + 1 )}> + </button>

                    <div className='card-body'> <p className='card-body conta'>Cantidad {contador} </p> </div> 

                    <button type="button" class="btn btn-danger" disabled ={contador < 1} onClick={() => setContador(contador -1 )}> - </button>

                </div>
                    

                        <button type="button" class="btn btn-success mt-4" onClick={() => props.onAdd(contador)} >Agregar al Carrito</button>

            </div>

        </>
    )
}

export default Counter
