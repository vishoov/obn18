import React from 'react'

const CartItem = ({name, quantity}) => {

    const handleAddQuantity = () =>{
        quantity+=1;
        console.log("New Quanrity: ", quantity)
    }
  return (
    <div>
        <h1>{name}</h1>
        <p>Quantity: ${quantity}</p>
        <buton 
        style={{  border:"1px solid white", backgroundColor:"grey",color:"White",  }}
        onClick = {handleAddQuantity} 
        >Add +1</buton>
    </div>
  )
}

export default CartItem