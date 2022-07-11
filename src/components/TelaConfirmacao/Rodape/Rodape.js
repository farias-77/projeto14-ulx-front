/* eslint-disable no-return-assign */
import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Aviso from "../../Aviso.js";

function Rodape({ produtos }) {
    let total = 0;
    produtos.forEach((i) => (total += parseInt(i.price, 10)));

    const navigate = useNavigate();
    const [mostraAviso, setMostraAviso] = useState([]);

    function BoxAviso(mensagem) {
        setMostraAviso([
            ...mostraAviso,
            <Aviso
                key={0}
                mensagem={mensagem}
                ok={() => {
                    setMostraAviso([]);
                    setTimeout(navigate("/"), 3000);
                }}
            />,
        ]);
    }

    return (
        <ContainerRodape>
            <BoxTexto>
                <p>Total</p>
                <p>R$ {total}</p>
            </BoxTexto>
            <BoxBotao>
                <Botao
                    onClick={() => BoxAviso("Compra realizada com sucesso!")}
                >
                    <p>Fazer o pedido</p>
                </Botao>
            </BoxBotao>
            {mostraAviso.map((i) => i)}
        </ContainerRodape>
    );
}

const ContainerRodape = styled.div`
    position: fixed;
    width: 100%;
    height: 118px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    z-index: 2;
    padding: 9px 12px;
`;

const BoxTexto = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    p {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.03em;
        color: #6e0ad6;
    }
`;

const BoxBotao = styled.div`
    display: flex;
    justify-content: center;
`;

const Botao = styled.div`
    width: 380px;
    height: 42px;
    cursor: pointer;

    background: rgb(42, 181, 251);
    background: -moz-linear-gradient(
        90deg,
        rgba(42, 181, 251, 1) 0%,
        rgba(110, 10, 214, 1) 100%
    );
    background: -webkit-linear-gradient(
        90deg,
        rgba(42, 181, 251, 1) 0%,
        rgba(110, 10, 214, 1) 100%
    );
    background: linear-gradient(
        90deg,
        rgba(42, 181, 251, 1) 0%,
        rgba(110, 10, 214, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2ab5fb",endColorstr="#6e0ad6",GradientType=1);

    border-radius: 21px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.025em;

        color: #ffffff;
    }
`;

export default Rodape;
