/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import "./deletar.css";

export default function Divv(props) {
    // const { ab, email, url, name, description, category, price, id } = props;
    const { url, name, description, price, id } = props;

    const [chave, setChave] = useState("deletar");

    function deletar() {
        if (chave === "deletar") {
            setChave("deletar2");
        } else {
            setChave("deletar");
        }
    }

    function ac() {
        const promise = axios.post("http://localhost:5000/cartdelete", {
            id,
        });
        promise.then((response) => {
            // console.log("oi");

            document.location.reload(true);
        });
    }

    return (
        <Item>
            <Div>
                <img src={url} alt="imagem produto" />

                <Caixa>
                    <h3>{name}</h3>
                    <h4>{description}</h4>
                    <h5>R$ {price}</h5>
                </Caixa>
            </Div>
            <button type="button" onClick={deletar}>
                Excluir
            </button>

            <div className={chave}>
                Excluir do carrinho?
                <Div>
                    <Sim>
                        <p onClick={ac} key="1010">
                            SIM
                        </p>
                    </Sim>
                    <Nao onClick={deletar}>
                        <p>NÃO</p>
                    </Nao>
                </Div>
            </div>
        </Item>
    );
}
const Div = styled.div`
    display: flex;
`;
const Sim = styled.div`
    margin-right: 30px;
    color: hsl(28, 99%, 50%);
`;
const Nao = styled.div`
    color: rgb(110, 10, 214);
`;
// const Deletar = styled.div`
//     width: 150px;
//     height: 125px;

//     display: none;
//     position: absolute;
//     right: 109px;
//     bottom: 0px;
// `;
const Item = styled.div`
    position: relative;
    margin-left: 15px;
    display: flex;
    background: white;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    img {
        object-fit: cover;
        width: 160px;
        height: 125px;
        border-radius: 4px;
    }
`;

const Caixa = styled.div`
    width: 244px;
    height: 125px;

    h3 {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    h4 {
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #a6a6a6;

        margin: 3px 0;
    }

    h5 {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }
`;
