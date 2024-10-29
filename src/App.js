import "./App.css";
import "./index.css";
import React, { useState } from "react";
import Topbar from "./components/Topbar.js";
import ProductPage from "./components/ProductPage.js";

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App font-beatrice h-screen bg-gray-100">
      <Topbar cartCount={cartCount} />
      <ProductPage setCartCount={setCartCount} cartCount={cartCount} />
    </div>
  );
}

export default App;
