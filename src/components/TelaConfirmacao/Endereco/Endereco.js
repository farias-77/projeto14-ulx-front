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
                <NumeroUsuario>+55 62982639600</NumeroUsuario>
                <RuaUsuario>
                    Primeira Avenida,Setor Leste Universitário
                </RuaUsuario>
                <ComplementoUsuario>
                    Quadra 102-C Lote 06 Numero 1131
                </ComplementoUsuario>
                <CidadeUsuario>Goiânia,Goias,Brazil,74605020</CidadeUsuario>
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
`;

const ComplementoUsuario = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #999999;
`;

const CidadeUsuario = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #999999;
`;

export default Endereco;
