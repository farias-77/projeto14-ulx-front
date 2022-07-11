/* eslint-disable react/no-array-index-key */
import { ArrowLeftShort } from "react-bootstrap-icons";
import { Bars } from "react-loader-spinner";
import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import axios from "axios";
import { AuthContext } from "../../providers/Auth.js";
import Endereco from "./Endereco/Endereco.js";
import FormaPagamento from "./FormaPagamento/FormaPagamento.js";
import Produtos from "./Produtos/Produtos.js";
// import Resumo from "./Resumo/Resumo.js";
import Rodape from "./Rodape/Rodape.js";
import Aviso from "../Aviso.js";

const prod = [
    {
        _id: { $oid: "62cc0ac40895a352ac991c01" },
        url: "https://s2.glbimg.com/cLTN7IGQcpbSKMS6SQUzqpY9_uU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/Z/u/wpbkW3SAiU434dVdz8dw/gabrieljesus.png",
        name: "Gabigol",
        description: "Gabriel da familia Gol",
        category: "casa",
        userId: { $oid: "62c7b6b33d4c96d6ed0b53a5" },
        price: "3",
    },
    {
        _id: { $oid: "62cc0ac40895a352ac991c01" },
        url: "https://s2.glbimg.com/cLTN7IGQcpbSKMS6SQUzqpY9_uU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/Z/u/wpbkW3SAiU434dVdz8dw/gabrieljesus.png",
        name: "Gabigol",
        description: "Gabriel da familia Gol",
        category: "casa",
        userId: { $oid: "62c7b6b33d4c96d6ed0b53a5" },
        price: "3",
    },
];

function TelaConfirmacao() {
    const navigate = useNavigate();

    const { user, setUser } = useContext(AuthContext);
    const [carregando, setCarregando] = useState(false);
    const [pagamento, setPagamento] = useState("");
    const [produtos, setProdutos] = useState(prod);
    const [mostraAviso, setMostraAviso] = useState([]);

    function BoxAviso(mensagem) {
        setMostraAviso([
            ...mostraAviso,
            <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
        ]);
    }

    function getCarrinho({ token }) {
        setCarregando(true);
        const URL = "https://projeto14-ulx.herokuapp.com/cart";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = axios.post(URL, config);
        promise.then((response) => {
            setCarregando(false);
            setProdutos(response.date);
        });
        promise.catch((err) => {
            setCarregando(false);
            const mensagem =
                typeof err.response.data === "undefined"
                    ? "Servidor desconectado"
                    : err.response.data;
            BoxAviso(mensagem);
        });
    }

    useEffect(() => {
        setUser({
            ...user,
            entrou: false,
        });

        getCarrinho(user);
    }, []);

    return (
        <ContainerConfirmacao>
            <Cabeca>
                <Setinha>
                    <ArrowLeftShort
                        size={30}
                        color="white"
                        cursor="pointer"
                        onClick={() => navigate(-1)}
                    />
                </Setinha>
                <BoxTexto>
                    <p>Confirmação do pedido</p>
                </BoxTexto>
            </Cabeca>
            <Principal>
                {carregando ? (
                    <Bars
                        height="40"
                        width="40"
                        color="var(--cor-roxo)"
                        ariaLabel="loading"
                    />
                ) : (
                    <>
                        <Endereco />
                        <FormaPagamento
                            setPagamento={setPagamento}
                            pagamento={pagamento}
                            setProdutos={setProdutos}
                        />
                        {produtos.map((i, index) => (
                            <Produtos key={index} produtos={i} />
                        ))}
                        {/* <Resumo /> */}
                        <p>
                            Assim que clicar “Fazer Pedido”, Eu confirmo que li
                            e que reconheço{" "}
                            <span>todos os termos e condições</span>.
                        </p>
                        <EspacoVazio />
                    </>
                )}
            </Principal>
            <Rodape produtos={produtos} />
            {mostraAviso.map((i) => i)}
        </ContainerConfirmacao>
    );
}

const ContainerConfirmacao = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--cor-fundo-tela);
    z-index: 5;
    position: absolute;
`;

const Principal = styled.main`
    p {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.032em;
        color: #9f9f9f;
    }

    span {
        color: #509abf;
    }
`;

const Cabeca = styled.header`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 82px;
    background-color: var(--cor-roxo);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 2;
`;

const Setinha = styled.div`
    position: fixed;
    left: 16px;
    top: 40px;
`;

const BoxTexto = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;

    p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.0115em;
        color: #ffffff;
    }
`;

const EspacoVazio = styled.div`
    width: 100%;
    height: 120px;
`;

export default TelaConfirmacao;
