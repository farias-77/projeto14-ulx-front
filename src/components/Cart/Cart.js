import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Divv from "./Div.js";
import Div2 from "./Div2.js";


export default function Cart(props) {
    const { email } = props;
    // const n = [1, 2, 3, 4, 5];

    const [caixa, setCaixa] = useState([]);
    const [caixa2, setCaixa2] = useState([]);
    function ab() {
        const promise = axios.post("https://ulx-store.herokuapp.com/cart", {
            email,
        });
        promise.then((response) => {
            // console.log("oi");
            // console.log(response.data);
            setCaixa([...response.data]);
        });
    }
    function ac() {
        const promise = axios.post("https://ulx-store.herokuapp.com/historic", {
            email,
        });
        promise.then((response) => {
            // console.log("oi");
            // console.log(response.data);
            setCaixa2([...response.data]);
        });
    }
    function ad(){
        const promise = axios.post("https://ulx-store.herokuapp.com/creationHistoric",  {
            email
        });
        promise.then((response) => {
            console.log('oi')
          
            
        });
    }

    return (
        <Container>
            <button type="button" className="visualizar" onClick={ab}>
                Visualize seu carrinho
            </button>
            <h1>Seu carrinho: </h1>
            <Div>
                {caixa.map((ns) => (
                    <Divv
                        emai={email}
                        url={ns.url}
                        name={ns.name}
                        description={ns.description}
                        category={ns.category}
                        price={ns.price}
                        id={ns._id}
                    />
                ))}
            </Div>
            <Container2>
                <Button onClick={ad}>Finalizar pedido</Button>
            </Container2>
            <button type="button" className="visualizar" onClick={ac}>
                Visualize seu histórico
            </button>
            <h1>Seu histórico de compras </h1>
            <Div>
                {caixa2.map((ns) => (
                    <Div2
                        emai={email}
                        url={ns.url}
                        name={ns.name}
                        description={ns.description}
                        category={ns.category}
                        price={ns.price}
                        id={ns._id}
                    />
                ))}
            </Div>
        </Container>
    );
}
const Container2 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button`
    height: 50px;
    width: 120px;

    margin-top: 10px;
    margin-bottom: 10px;
    background: rgb(110, 10, 214);
    border-radius: 4px;
`;
const Container = styled.div`
    margin-top: 150px;
    padding-left: 19px;
    background-color: #eeeeee;

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
const Div = styled.div`
    height: 500px;
    width: 100%;

    overflow-y: scroll;
`;
