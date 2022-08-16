import React, { useState } from 'react'

const ConditionalApp = () => {

  const [condition, setCondition] = useState(true);


  return (
    <div>
      <h1>ConditionalApp</h1>

      <button onClick={() => setCondition(!condition)}>Toggle</button>

      {/* {
        condition 
        ? <h1>Show message in True</h1>
        : <h1>Show message in False</h1>
      } */}


      {/* si quiero mostrar el mensaje solo si esta en verdadero */}
      {/* {
        condition
        ? <h1>Show message in True</h1>
        : null
      } */}


      {/* si quiero no quiero colocar nada si es falso */}
      {/* {
        condition &&
           <h1>Show message only in True</h1>
      } */}

      {/* si queremos que se imprima el buleano */}

      <h1>State value is {condition.toString()}</h1>

    </div>
  )
}

export default ConditionalApp