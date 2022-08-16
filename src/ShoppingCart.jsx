import React, { useState } from 'react'

const initialCart = [
  {id: 1, title: "Product", description: "Descripcion"},
  {id: 2, title: "Product #2", description: "Descripcion #2"}

]

const ShoppingCart = () => {

  const [cart, setCart] = useState(initialCart);

  const deleteProduct = (productId) => {
   const changeCart = cart.filter(product => product.id !== productId)

    setCart(changeCart)
  }

  const addProduct = (newProduct) => {
    newProduct.id = Date.now();

    const changeCart = [
        newProduct,
        ...cart,
    ];

    setCart(changeCart);
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
      <h1>Shopping Cart</h1>

      <button onClick={() => addProduct({ title: "Nuevo título", description: "Nueva Desc" })}> Add</button>

      {cart.map(product => (
        <div key={product.id}>
          <h1>{product.id}{product.title}</h1>
          <p>{product.description}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button onClick={() => updateProduct({ id: product.id, title: "Edit título", description: "Edit Desc" })}> Update </button>
        </div>
      ))}

      {
        <pre>{JSON.stringify(cart, null, 2)}</pre>
      }
    </div>
  )
}

export default ShoppingCart