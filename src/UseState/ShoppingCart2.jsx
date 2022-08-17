import React, { useState } from 'react'

const inicialCart = [
  {id: 1, title: "titulo", description: "Descripcion"},
  {id: 2, title: "titulo #2", description: "Descripcion #2 "}
]

const ShoppingCart2 = () => {
  const [cart, setCart] = useState(inicialCart);

  const deleteProduct = (productId) => {
    const changeCart = cart.filter(product => product.id !== productId)

    setCart(changeCart)
  }

  const addProduct = (newProduct) => {
    newProduct.id = Date.now()

    const changeCart = [
      newProduct,
      ...cart
    ]

    setCart(changeCart)
  }

  const updateProduct = (editProduct) => {
    const changeCart = cart.map(product => (
      product.id === editProduct.id
      ? editProduct
      : product
    ))

    setCart(changeCart)
  }

  return (
    <div>
      <h1>Shopping Cart2</h1>

      <button onClick={() => addProduct({title: "Nuevo titulo", description: "Nueva descripcion"})}>Add</button>

      {cart.map(product => (
        <div>
          <h1>{product.id} {product.title}</h1>
          <p>{product.description}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button onClick={() => updateProduct({id: product.id, title: "Edit titulo", description: "Edit descripcion"})}>Update</button>
        </div>
      ))}

      {
        <pre>{JSON.stringify(cart, null, 2)}</pre>
      }
    </div>

    
  )
}

export default ShoppingCart2