import React from "react";
// import CounterApp from "./UseState/CounterApp";
// import ConditionalApp from "./UseState/ConditionalApp";
// import ErrorApp from "./UseState/ErrorApp";
// import ProductApp from "./UseState/ProductApp";
// import ShoppingCart from "./UseState/ShoppingCart";
// import ShoppingCart2 from "./UseState/ShoppingCart2";

// COMPONENTES DE UseEffec 
import LifeCycle from "./UseEffec/LifeCycle"
import FetchCart from "./UseEffec/FetchCart";



function App() {
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

      {/* <LifeCycle/> */}
      <FetchCart/>

    </div>
  );
}

export default App;
