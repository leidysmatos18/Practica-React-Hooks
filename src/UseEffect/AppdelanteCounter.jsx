import React, { useEffect, useState } from 'react'

const AppdelanteCounter = () => {

  const [cuenta, setCuenta] = useState(0);

  useEffect(() => {
     document.title = `La cuenta es: ${cuenta}`
  })
  return (
    <div>
      <h1>AppdelanteCounter</h1>

      <h1>La cuenta es: {cuenta}</h1>
      <button onClick={() => setCuenta(cuenta +1)}>Incrementar</button>
    </div>
  )
}

export default AppdelanteCounter