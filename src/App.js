import "./App.css";
import "./index.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Topbar from "./components/Topbar.js";
import ProductPage from "./components/ProductPage.js";
import SizeChart from "./components/SizeChart.js";
import Favourites from "./components/Favourites.js";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  return (
    <div className="App font-beatrice h-full bg-gray-100">
      {/* Conditionally render Topbar only on the main page */}
      {location.pathname === "/" && <Topbar cartCount={cartCount} />}
      <Routes>
        <Route
          path="/"
          element={
            <ProductPage setCartCount={setCartCount} cartCount={cartCount} />
          }
        />
        <Route path="/SizeChart" element={<SizeChart />} />
        <Route path="/Favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
