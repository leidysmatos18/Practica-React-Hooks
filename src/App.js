import React, { useState } from "react";
// import CounterApp from "./UseState/CounterApp";
// import ConditionalApp from "./UseState/ConditionalApp";
// import ErrorApp from "./UseState/ErrorApp";
// import ProductApp from "./UseState/ProductApp";
// import ShoppingCart from "./UseState/ShoppingCart";
// import ShoppingCart2 from "./UseState/ShoppingCart2";

// COMPONENTES DE UseEffec 
import LifeCycle from "./UseEffect/LifeCycle";
import FetchCart from "./UseEffect/FetchCart";
import ResizeApp from "./UseEffect/ResizeApp";


function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
  
      {/* COMPONENTES DE UseState */}
      {/* <CounterApp/>
      <ConditionalApp/>
      <ErrorApp/>
      <ProductApp/>
      <ShoppingCart/>
      <ShoppingCart2/> */}

      {/* COMPONENTES DE UseEffec */}

      {/* este boton es de la app resize */}
      <button onClick={() => setShow(!show)}>
        Show/Hide
      </button>

      {show && <LifeCycle/>}
  
      {/* <FetchCart/> */}
      {/* { show && <ResizeApp/> } */}
     

    </div>
  );
}

export default App;
