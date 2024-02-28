import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./pages/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CarritoCompra from "./components/CarritoCompra/CarritoCompraContainer";
import CartProvider from "./routing/context/CartContext";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Dashboard>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ItemListContainer />} />
              <Route
                path="/products/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                path="/product/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/checkout" element={<CarritoCompra />} />
            </Routes>
            <Footer />
          </Dashboard>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
