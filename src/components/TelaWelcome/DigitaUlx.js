/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import styled from "styled-components";

function DigitaUlx() {
    const texto1 = "Olx";
    const texto2 = "Ulx";

    const [text, setText] = useState("");
    const [mostraBars, setMostraBars] = useState(false);

    function apagaEscrita(txt, ii) {
        if (ii > 0) {
            setText(txt.slice(0, ii - 1));
            setTimeout(() => {
                apagaEscrita(txt, ii - 1);
            }, 100);
        } else {
            setTimeout(() => {
                typeWriter(texto2, true, 0);
            }, 100);
        }
    }

    function typeWriter(txt, parar, i = 0) {
        if (i < texto1.length) {
            setText(txt.slice(0, i + 1));
            setTimeout(() => {
                typeWriter(txt, parar, i + 1);
            }, 100);
        }
        if (i === texto1.length && parar === false) {
            setTimeout(() => {
                apagaEscrita(txt, i);
            }, 300);
        }
    }

    useEffect(() => {
        typeWriter(texto1, false);
        setTimeout(() => {
            setMostraBars(true);
        }, 1600);
    }, []);

    return (
        <Container>
            <BoxLetras>
                <h1 style={{ color: "var(--cor-O)" }}>{text[0]}</h1>
                <h1 style={{ color: "var(--cor-L)" }}>{text[1]}</h1>
                <h1 style={{ color: "var(--cor-X)" }}>{text[2]}</h1>
                <TypedText display={mostraBars} />
            </BoxLetras>
            <BoxBarra>
                <Bars
                    height="40"
                    width="40"
                    color="black"
                    ariaLabel="loading"
                />
            </BoxBarra>
        </Container>
    );
}

const Container = styled.div`
    flex-direction: column;
`;

const BoxLetras = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BoxBarra = styled.div`
    display: flex;
    justify-content: center;
    opacity: 0;
    animation: fade-in 2s 2s forwards;

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const TypedText = styled.div`
    border-right: 4px solid black;
    animation: blinkTextCursor 800ms steps(44) infinite normal;
    height: 75px;
    color: #000;
    display: ${(props) =>
        props.display ? "var(--display-none)" : "var(--display-block)"};

    @keyframes blinkTextCursor {
        from {
            border-right-color: black;
        }
        to {
            border-right-color: transparent;
        }
    }
`;

export default DigitaUlx;
