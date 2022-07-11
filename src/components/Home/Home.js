import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Product from "./Product.js";
import { AuthContext } from "../../providers/Auth.js";

export default function Home() {
    const { user, setUser } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setUser({
            ...user,
            entrou: true,
        });
    }, []);

    useEffect(() => {
        // alterar url quando resolver heroku
        const URL = "https://projeto14-ulx.herokuapp.com/products";
        const promise = axios.get(URL);

        promise.then((response) => {
            setProducts([...response.data]);
        });

        promise.catch(() => {});
    }, []);

    return (
        <Container>
            <Category>
                <h1>Casa </h1>
                <Products>
                    {products.length > 0
                        ? products
                              .filter((product) => product.category === "casa")
                              .map((product) => (
                                  <Link to={`/products/${product._id}`}>
                                      <Product
                                          image={product.image}
                                          name={product.name}
                                          description={product.description}
                                          price={product.price}
                                          key={() => uuid()}
                                      />
                                  </Link>
                              ))
                        : "Nenhum produto disponível nesta categoria"}
                </Products>
            </Category>
            <Category>
                <h1>Esporte e lazer </h1>
                <Products>
                    {products.length > 0
                        ? products
                              .filter(
                                  (product) =>
                                      product.category === "esporte e lazer"
                              )
                              .map((product) => (
                                  <Link to={`/products/${product._id}`}>
                                      <Product
                                          image={product.url}
                                          name={product.name}
                                          description={product.description}
                                          price={product.price}
                                          key={() => uuid()}
                                      />
                                  </Link>
                              ))
                        : "Nenhum produto disponível nesta categoria"}
                </Products>
            </Category>
            <Category>
                <h1>Eletrônicos e celulares </h1>
                <Products>
                    {products.length > 0
                        ? products
                              .filter(
                                  (product) =>
                                      product.category ===
                                      "eletrônicos e celulares"
                              )
                              .map((product) => (
                                  <Link to={`/products/${product._id}`}>
                                      <Product
                                          image={product.url}
                                          name={product.name}
                                          description={product.description}
                                          price={product.price}
                                          key={() => uuid()}
                                      />
                                  </Link>
                              ))
                        : "Nenhum produto disponível nesta categoria"}
                </Products>
            </Category>
            <Category>
                <h1>Moda e beleza</h1>
                <Products>
                    {products.length > 0
                        ? products
                              .filter(
                                  (product) =>
                                      product.category === "moda e beleza"
                              )
                              .map((product) => (
                                  <Link to={`/products/${product._id}`}>
                                      <Product
                                          image={product.url}
                                          name={product.name}
                                          description={product.description}
                                          price={product.price}
                                          key={() => uuid()}
                                      />
                                  </Link>
                              ))
                        : "Nenhum produto disponível nesta categoria"}
                </Products>
            </Category>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin-top: 150px;
    padding-left: 19px;
    background-color: #eeeeee;

    overflow-x: scroll;
`;

const Products = styled.div`
    width: 100%;
    height: 216px;
    overflow-y: scroll;

    display: flex;
`;

const Category = styled.div`
    margin-top: 20px;

    h1 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 32px;
        letter-spacing: 0.018em;
        color: #333333;

        margin-bottom: 15px;
    }
`;
