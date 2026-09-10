import { Route, Routes } from "react-router-dom";

import Home from './components/Home/Home';
import Collection from './components/Collection/Collection';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from "./components/UserInfo/Login";
import Signup from "./components/UserInfo/Signup";
import EachProduct from "./pages/EachProduct";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/404/NotFound";
import Layout from "./pages/Layout";
import Checkout from "./pages/Checkout";
import OrderConfirm from "./pages/OrderConfirm";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (

    <div className="min-h-screen w-full font-poppins">
      <Toaster />
      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/eachproduct/:id" element={<EachProduct />} />
          <Route path="/checkout" element={<Checkout/>}/>

        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="order" element={<OrderConfirm/>}/>

      </Routes>

    </div>
  );
};

export default App;