import React, { useEffect, useState } from 'react'

const LifeCycle = () => {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("useEffect []")
  }, []);

  useEffect(() => {
    console.log("useEffect no dependency")
  });

  useEffect(() => {
    console.log("useEffect [counter1]")
  }, [counter1]);

  useEffect(() => {
    console.log("useEffect [counter2]")
  }, [counter2]);

  useEffect(() => {
    console.log("useEffect [counter1, counter2]")
  }, [counter1, counter2]);


  return (
    <div>
      <h1>LifeCycle</h1>
      <h2>Clicks #1: {counter1}</h2>
      <h2>Clicks #2: {counter2}</h2>

      <button onClick={()=> setCounter1(counter1 +1)}>counter 1</button>
      <button onClick={()=> setCounter2(counter1 +1)}>counter 2</button>


    </div>
  )
}

export default LifeCycle