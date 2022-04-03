import React, {useState} from 'react'
import ItemCount from '../../components/ItemCount'

const ItemListContainer = ({greeting}) => {

  const onAdd = (count) => {
    console.log(`Se agregaron ${count} productos al carrito`);
}  

  return (
    <div>
        <h2>{greeting}</h2>
        <ItemCount stock={5} onAdd={onAdd}/>
        
    </div>
  )
}

export default ItemListContainer