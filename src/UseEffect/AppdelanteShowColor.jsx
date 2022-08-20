import React, { useEffect, useState } from 'react'

const AppdelanteShowColor = () => {

  const [show, setShow] = useState(true);
  const changeState = () => {
    setShow(!show)
  }
  
  return (
    <div>
      <h1>AppdelanteShowColor</h1>

      <button onClick={() => changeState()}>Show Color</button>

      {show ? <MouseColor/> : null}
    </div>
  )

  function MouseColor () {
    const [color, setColor] = useState("pink");

    useEffect(() => {
      function onMouseMove(e) {
        if(e.clientX < window.innerWidth / 2){
          setColor("pink")
        }else {
          setColor("yellow")
        }
      }
      window.addEventListener("mousemove", onMouseMove);
      console.log("ejecutandoo")

      return () => {
        console.log("limpindooo")
        window.removeEventListener("mousemove", onMouseMove)
      }
    }, [])

    console.log("ocurrio un rinder")
    return <div style={{height: "100vh", background: color}}/>
  }
}



export default AppdelanteShowColor