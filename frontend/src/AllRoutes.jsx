import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Login from "./Pages/Auth/Login";
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import NavBar from "./Components/NavBar";


const AllRoutes = () => {
  return (
    <div className="px-4 sm:px-5 md:px-7 lg:px-9 bg-white">
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/collection" element={<Collection/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/product/:productId" element={<Product/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/placeorder" element={<PlaceOrder/>}/>
                <Route path="/order" element={<Order/>}/>
            </Routes>
        </Router>

    </div>
  )
}

export default AllRoutes