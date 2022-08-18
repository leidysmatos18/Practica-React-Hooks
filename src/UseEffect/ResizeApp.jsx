import React, { useEffect, useState } from 'react'

const ResizeApp = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("return del useEffect")
    }
  }, [])

  const isMobile = windowWidth < 768;

  return (
    <div>
      <h1>ResizeApp </h1>

      <h1>{windowWidth}</h1>
      {
        isMobile && <h2>Show only mobile device</h2>
      }
    </div>
  )
}

export default ResizeApp