import { ChevronCompactRight } from "react-bootstrap-icons";
import styled from "styled-components";
import React from "react";

function Resumo() {
    return (
        <ContainerResumo>
            <Titulo>Resumo</Titulo>
            <BoxText>
                <p>SubTotal</p>
                <p>R$ 32,31</p>
            </BoxText>
            <Separa />
            <BoxText>
                <p>Códito Promocional</p>
                <p>Digite o código aqui</p>
            </BoxText>
            <Separa />
            <BoxText>
                <p>Frete</p>
                <p>R$ 6,67</p>
            </BoxText>
            <SetaDireita>
                <ChevronCompactRight />
            </SetaDireita>
        </ContainerResumo>
    );
}

const ContainerResumo = styled.div`
    width: 100%;
    height: 175px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    padding: 12px 13px;
    position: relative;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Titulo = styled.div`
    margin-left: 7px;
    margin-bottom: 27px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.06em;
    color: #6e0ad6;
`;

const SetaDireita = styled.div`
    position: absolute;
    top: 102px;
    right: 2%;
`;

const BoxText = styled.div`
    width: 96%;
    display: flex;
    justify-content: space-between;

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.06em;
        color: #000000;
    }
`;

const Separa = styled.div`
    width: 100%;
    margin-top: 16px;
    margin-bottom: 12px;
    border: 1px solid #f2f2f2;
`;

export default Resumo;
