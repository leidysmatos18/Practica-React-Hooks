import React, { useState } from 'react'

const MiniCodeInput = () => {

  const [name, setName] = useState("");
  return (
    <div>
      <h1>mi nombre es {name}</h1>
      <input type="text" value={name} name="name" onChange={(e) => {
        setName(e.target.value)

        setTimeout(() => {
          setName(e.target.value.toUpperCase())
        }, 3000)
      }}/>

    </div>
  )
}

export default MiniCodeInput