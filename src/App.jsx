import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./pages/Home/Home";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Dashboard>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ItemListContainer />} />
            {/* <Home />
            <div className="container-fluid">
              <div className="container">
                <ItemListContainer />
              </div>
            </div>
            <Footer /> */}
          </Routes>
        </Dashboard>
      </BrowserRouter>
    </>
  );
}

export default App;
