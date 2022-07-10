import { PlusLg, DashLg } from "react-bootstrap-icons";
import styled from "styled-components";
import React from "react";

function QuantidadeProduto() {
    return (
        <BoxQnt>
            <Retira>
                <DashLg size={20} color="#A0A0A0" />
            </Retira>
            <Quantidade>1</Quantidade>
            <Adiciona>
                <PlusLg size={20} color="#A0A0A0" />
            </Adiciona>
        </BoxQnt>
    );
}

const BoxQnt = styled.div`
    position: absolute;
    display: flex;
    right: 1%;
    bottom: 0;
`;

const Retira = styled.div`
    width: 25px;
    height: 25px;
    background: #f4f4f4;
    border: 1px solid #cccccc;
    border-radius: 11px 0px 0px 11px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Quantidade = styled.div`
    width: 35px;
    height: 25px;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Adiciona = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid #cccccc;
    border-radius: 0px 11px 11px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default QuantidadeProduto;
