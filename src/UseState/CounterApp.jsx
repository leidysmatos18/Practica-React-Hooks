import React, {useState} from 'react'

const CounterApp = () => {

      let [counter, setCounter] = useState(0);

      const incrementarCounter = () => {
        setCounter(counter + 1)

      //si se quiere manejar dos estados en el mismo scope se debe cambiar el useState a let para poder cambiarlo

        // setCounter(prevCounter => prevCounter +1)
      }

  return (
    <div>
      <h1>CounterApp</h1>

      <button onClick={incrementarCounter}>Incrementar</button>
      <h2>Clicks: {counter}</h2>

    </div>
  )
}

export default CounterApp