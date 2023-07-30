
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
  <>
<Navbar/>
<Routes>
<Route exact path="/" element={<Home/>} />
<Route exact path="/cart" element={<Cart/>} />
</Routes>
  </>
  );
}

export default App;
