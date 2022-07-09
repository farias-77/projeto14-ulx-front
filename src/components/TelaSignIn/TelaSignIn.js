import { ArrowLeftShort } from "react-bootstrap-icons";
import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from "../../providers/Auth.js";
import Inputs from "./Inputs.js";

function TelaSignIn() {
    const navigate = useNavigate();

    const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
        setUser({
            ...user,
            entrou: false,
        });
    }, []);

    return (
        <SignIn>
            <Setinha>
                <ArrowLeftShort
                    size={30}
                    color="#333333"
                    cursor="pointer"
                    onClick={() => navigate("/home")}
                />
            </Setinha>
            <Logotipo>
                <div className="marca" style={{ color: "var(--cor-O)" }}>
                    U
                </div>
                <div className="marca" style={{ color: "var(--cor-L)" }}>
                    L
                </div>
                <div className="marca" style={{ color: "var(--cor-X)" }}>
                    X
                </div>
            </Logotipo>
            <Inputs />
            <Link to="/sign-up" style={{ textDecoration: "none" }}>
                <LogSignIn>Primeira vez? Cadastre-se!</LogSignIn>
            </Link>
        </SignIn>
    );
}

const Setinha = styled.div`
    position: fixed;
    left: 16px;
    top: 50px;
`;

const SignIn = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--cor-fundo-tela);
    z-index: 3;
    padding: 160px 24px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logotipo = styled.div`
    display: flex;
    justify-items: center;
    margin-bottom: 24px;
`;

const LogSignIn = styled.p`
    font-family: "Righteous";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: var(--cor-roxo);
`;

export default TelaSignIn;
