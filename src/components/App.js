import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Header from "./Header/Header.js";

export default function App(){

    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}