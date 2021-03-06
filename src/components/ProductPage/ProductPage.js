import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import axios from "axios";

export default function ProductPage(props) {
    const { email } = props;
    const { productId } = useParams();

    const [product, setProduct] = useState({});
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        const URL = `https://projeto14-ulx.herokuapp.com/products/${productId}`;
        const promise = axios.get(URL);

        //  atualizar com dados do bd
        promise.then((response) => {
            setProduct({ ...response.data });
        });
    }, []);
    function addCart2(){
        const promise = axios.post("https://projeto14-ulx.herokuapp.com/addCart", {
            email,id:product._id
        });
        promise.then((response) => {
            // console.log("oi");
            // eslint-disable-next-line
            console.log(response.data);
           ;
        });
    }

    function addCart() {
        // lógica para add ao carrinho

        setCarregando(true);
        setTimeout(() => {
            setCarregando(false);
        }, 4000);
        addCart2()
    }

    // trocar loading por spinner
    return (
        <Container>
            <img
                src={product.url ? product.url : "loading..."}
                alt="imagem produto"
            />
            <ProductInfo>
                <h2>{product.name ? product.name : "loading..."}</h2>
                <h4>{product.price ? `R$${product.price}` : "loading..."}</h4>
                <h3>
                    {product.description ? product.description : "loading..."}
                </h3>
                <h3>
                    {product.category
                        ? `Categoria: ${product.category}`
                        : "loading..."}
                </h3>
            </ProductInfo>
            <Botao onClick={() => addCart()}>
                {carregando ? (
                    <Bars
                        height="40"
                        width="40"
                        color="white"
                        ariaLabel="loading"
                    />
                ) : (
                    <p>Adicionar ao carrinho</p>
                )}
            </Botao>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;

    margin-top: 150px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        object-fit: cover;
        width: 100%;
        border-radius: 10px;
        box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
    }

    background-color: #eeeeee;
`;

const ProductInfo = styled.div`
    width: 100%;

    margin-top: 30px;

    h2 {
        font-weight: 700;
        font-size: 30px;
        color: #000000;
    }

    h4 {
        font-weight: 500;
        font-size: 25px;

        margin: 15px 0;
    }

    h3 {
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #000000;

        margin: 10px 0;
    }
`;

const Botao = styled.button`
    width: 100%;
    height: 46px;
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 20px;
        color: #ffffff;
    }
`;
