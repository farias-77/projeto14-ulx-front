import styled from "styled-components";
import React from "react";

import DigitaUlx from "./DigitaUlx.js";

function TelaWelcome() {
    return (
        <ContainerWelcome>
            <DigitaUlx />
        </ContainerWelcome>
    );
}

const ContainerWelcome = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--cor-fundo-tela);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        font-family: "Righteous";
        font-style: normal;
        font-weight: 400;
        font-size: 80px;
        line-height: 99px;
    }
`;

export default TelaWelcome;
