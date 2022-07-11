import { ArrowLeftShort } from "react-bootstrap-icons";
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from "../../providers/Auth.js";
import Endereco from "./Endereco/Endereco.js";
import FormaPagamento from "./FormaPagamento/FormaPagamento.js";
import Produtos from "./Produtos/Produtos.js";
import Resumo from "./Resumo/Resumo.js";
import Rodape from "./Rodape/Rodape.js";

function TelaConfirmacao() {
    const navigate = useNavigate();

    const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
        setUser({
            ...user,
            entrou: false,
        });
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
                <Endereco />
                <FormaPagamento />
                <Produtos />
                <Resumo />
                <p>
                    Assim que clicar “Fazer Pedido”, Eu confirmo que li e que
                    reconheço <span>todos os termos e condições</span>.
                </p>
                <EspacoVazio />
            </Principal>
            <Rodape />
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
