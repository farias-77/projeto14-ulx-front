import styled from "styled-components";
import React from "react";

// import QuantidadeProduto from "./QuantidadeProduto.js";

function Produto({ produto }) {
    const { name, price, url } = produto;
    return (
        <BoxProduto>
            <QuadroFoto src={url} alt="ogot" />
            <InfoProdutos>
                <NomeProduto>{name}</NomeProduto>
                <PrecoProduto>R$ {price}</PrecoProduto>
                {/* <QuantidadeProduto /> */}
            </InfoProdutos>
        </BoxProduto>
    );
}

const BoxProduto = styled.div`
    width: 100%;
    display: flex;
`;

const QuadroFoto = styled.img`
    height: 84px;
    width: 84px;
    background-color: #d9d9d9;
    object-fit: cover;
`;

const InfoProdutos = styled.div`
    width: 74%;
    padding: 3px 0 0 12px;
    position: relative;
`;

const NomeProduto = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #000000;
    max-width: 228px;
    max-height: 14px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const PrecoProduto = styled.div`
    margin-top: 40px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.04em;

    color: #000000;
`;

export default Produto;
