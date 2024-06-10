import React from "react";

// Components
import Header from "./Components/Header/Header.tsx";
import Checkout from "./Components/Checkout/Checkout.tsx";
import Orders from "./Components/Orders/Orders.tsx";

const App = () => {
  return (
    <div>
      <Header />
      <Checkout/>
      <Orders/>    
    </div>
  );
};

export default App;
