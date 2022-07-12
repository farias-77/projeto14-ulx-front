import { ChevronCompactRight, GeoAlt } from "react-bootstrap-icons";
import styled from "styled-components";
import React from "react";

function Endereco() {
    return (
        <ContainerEndereco>
            <Pin>
                <GeoAlt size={24} color="var(--cor-roxo)" />
            </Pin>
            <Textos>
                <NomeUsuario>Vinicius Cavalcante</NomeUsuario>
                <NumeroUsuario>+55 62996009600</NumeroUsuario>
                <RuaUsuario>Avenida,Setor</RuaUsuario>
                <ComplementoUsuario>Quadra Lote Numero</ComplementoUsuario>
                <CidadeUsuario>Cidade,Estado,Pais,12345-789</CidadeUsuario>
            </Textos>
            <SetaDireita>
                <ChevronCompactRight />
            </SetaDireita>
        </ContainerEndereco>
    );
}

const ContainerEndereco = styled.div`
    width: 100%;
    height: 130px;
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

const SetaDireita = styled.div`
    position: absolute;
    top: 56px;
    right: 2%;
`;

const Textos = styled.div`
    margin-top: 1px;
    margin-left: 30px;
    height: 102px;
    display: grid;
`;

const NomeUsuario = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.012em;
    color: #222222;
    max-width: 295px;
    max-height: 16px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const NumeroUsuario = styled.div`
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.05em;
    color: #999999;
`;

const RuaUsuario = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #999999;
    max-width: 295px;
    max-height: 16px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ComplementoUsuario = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #999999;
    max-width: 295px;
    max-height: 16px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const CidadeUsuario = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #999999;
    max-width: 295px;
    max-height: 16px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default Endereco;
