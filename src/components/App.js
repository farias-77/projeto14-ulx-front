import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home.js";
// import Header from "./Header/Header.js";
import TelaWelcome from "./TelaWelcome/TelaWelcome.js";

export default function App() {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<TelaWelcome />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
