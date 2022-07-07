import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Header from "./Header/Header.js";
import Cart from "./Cart/Cart.js";
import Creation from "./Creation/Creation.js";
import Your from "./Your/Your.js";
export default function App(){

    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/creation" element={<Creation />} />
                <Route path="/your" element={<Your />} />
                your
            </Routes>
        </BrowserRouter>
    )
}