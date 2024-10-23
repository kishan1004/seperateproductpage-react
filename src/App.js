import "./App.css";
import "./index.css";
import Topbar from "./components/Topbar.js";
import ProductPage from "./components/ProductPage.js";

function App() {
  return (
    <div className="App font-beatrice h-screen bg-gray-100">
      <Topbar />
      <ProductPage />
    </div>
  );
}

export default App;
