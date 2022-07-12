import { CashCoin } from "react-bootstrap-icons";
import styled from "styled-components";
import React from "react";

function FormaPagamento({ setPagamento }) {
    return (
        <ContainerFormaPagamento>
            <Pin>
                <CashCoin size={20} color="var(--cor-roxo)" />
            </Pin>
            <Textos>
                <TextoFormaPagamento>
                    Selecione a forma de pagamento
                </TextoFormaPagamento>
            </Textos>
            <Selecionar name="Pagamento" onChange={e => setPagamento(e.target.value)}>
                <Opcao value="nada" />
                <Opcao value="cartao">Cartão</Opcao>
                <Opcao value="pix">Pix</Opcao>
            </Selecionar>
        </ContainerFormaPagamento>
    );
}

const ContainerFormaPagamento = styled.div`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    padding: 10px 13px;
    position: relative;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Pin = styled.div`
    position: absolute;
`;

const Textos = styled.div`
    margin-top: 1px;
    margin-left: 36px;
`;

const TextoFormaPagamento = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.045em;
    color: #509abf;
`;

const Selecionar = styled.select`
    margin-top: 12px;
    margin-left: 36px;
`

const Opcao = styled.option``

export default FormaPagamento;
