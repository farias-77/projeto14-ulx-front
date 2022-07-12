// import { PencilSquare, ShopWindow } from "react-bootstrap-icons";
import { ShopWindow } from "react-bootstrap-icons";
import styled from "styled-components";
import React from "react";

import Produto from "./Produto.js";

function Produtos({ produtos }) {
    return (
        <ContainerProdutos>
            <Pin>
                <ShopWindow size={20} color="var(--cor-roxo)" />
            </Pin>
            {/* <Edita>
                <PencilSquare size={16} color="#989898" />
            </Edita> */}
            <Textos>
                <NomeLoja>Ulx{/* Daystar Brasil Store */}</NomeLoja>
            </Textos>
            <Produto produto={produtos} />
            {/* <Divisor />
            <Rodape>
                <BoxRemessa>
                    <Remessa>Remessa: </Remessa>
                    <PrecoRemessa>R$ 6,67</PrecoRemessa>
                </BoxRemessa>
                <BoxEstimativa>
                    <Estimativa>
                        Estimativa de entrega: <span>20 jul</span>.
                    </Estimativa>
                </BoxEstimativa>
            </Rodape> */}
        </ContainerProdutos>
    );
}

const ContainerProdutos = styled.div`
    width: 100%;
    /* height: 205px; */
    height: 150px;
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

// const Edita = styled.div`
//     position: absolute;
//     top: 13px;
//     right: 13px;
// `;

const Textos = styled.div`
    margin-top: 1px;
    margin-left: 30px;
    margin-bottom: 18px;
`;

const NomeLoja = styled.div`
    margin-top: 3px;
    font-weight: 700;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 0.04em;
    color: #222222;
`;

// const Divisor = styled.div`
//     width: 100%;
//     margin-top: 18px;
//     margin-bottom: 14px;
//     border: 1px solid #f2f2f2;
// `;

// const Rodape = styled.div`
//     display: flex;
//     justify-content: space-between;
// `;

// const BoxRemessa = styled.div`
//     width: 74px;
// `;

// const Remessa = styled.div`
//     font-weight: 600;
//     font-size: 12px;
//     line-height: 14px;
//     letter-spacing: 0.06em;
//     color: #000000;
//     margin-bottom: 3px;
// `;

// const PrecoRemessa = styled.div`
//     font-weight: 300;
//     font-size: 10px;
//     line-height: 12px;
//     letter-spacing: 0.08em;
//     color: #999999;
// `;

// const BoxEstimativa = styled.div``;

// const Estimativa = styled.div`
//     margin-top: 5px;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 14px;
//     letter-spacing: 0.04em;
//     color: #999999;

//     span {
//         color: black;
//     }
// `;

export default Produtos;
