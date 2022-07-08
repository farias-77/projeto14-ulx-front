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
`;

export default TelaWelcome;
