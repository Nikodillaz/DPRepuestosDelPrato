import React, {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {

    const [cantidad, setCantidad] = useState(1);

    const sumarItem = () => {
        if (cantidad < stock) {
            
            setCantidad(cantidad + 1);
        }
    }

    const restarItem = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);            
        }
    }
    
  return (
    <div>
        <button onClick={restarItem}>-</button>
        <span>{cantidad}</span>
        <button onClick={sumarItem}>+</button>
        <button onClick={()=> onAdd(cantidad)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount