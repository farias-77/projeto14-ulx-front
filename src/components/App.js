import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./Home/Home.js";
import Header from "./Header/Header.js";
import { AuthContext } from "../providers/Auth.js";
import TelaSignIn from "./TelaSignIn/TelaSignIn.js";
import TelaSignUp from "./TelaSignUp/TelaSignUp.js";
import TelaWelcome from "./TelaWelcome/TelaWelcome.js";
import ProductPage from "./ProductPage/ProductPage.js";
import TelaConfirmacao from "./TelaConfirmacao/TelaConfirmacao.js";

export default function App() {
    const { user } = React.useContext(AuthContext);

    const { entrou } = user;

    return (
        <BrowserRouter>
            <Header entrou={entrou} />
            <Routes>
                <Route path="/" element={<TelaWelcome />} />
                <Route path="/sign-in" element={<TelaSignIn />} />
                <Route path="/sign-up" element={<TelaSignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products/:productId" element={<ProductPage />} />
                <Route path="/confirmacao" element={<TelaConfirmacao />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
