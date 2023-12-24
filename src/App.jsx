import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="container-fluid px-0">
        <NavBar />
      </div>
      <ItemListContainer saludo="Hola mundo" />
      <Footer />
    </>
  );
}

export default App;
