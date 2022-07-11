 /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";

import { AuthContext } from "../../providers/Auth.js";
import logo from "../../assets/image/logo.png";

export default function Header({ entrou }) {
    const navigate = useNavigate();

    const { user, setUser } = useContext(AuthContext);

    function reiniciaPag() {
        window.location.reload();
    }

    function Sair() {
        setUser({ ...user, name: "", email: "", token: "", entrou: false });
        localStorage.removeItem("usuario");
        navigate("/");
    }

    return (
        <Container entrou={entrou}>
            <Logo>
                <img
                    src={logo}
                    alt="logo"
                    style={{ cursor: "pointer" }}
                    onClick={() => reiniciaPag()}
                    onKeyDown={() => reiniciaPag()}
                />
                <p>O seu marketplace de confiança</p>
            </Logo>
            <Saida aparece={user.token !== ""}>
                <ion-icon
                    name="exit-outline"
                    style={{
                        width: "28px",
                        height: "28px",
                        color: "black",
                        cursor: "pointer",
                    }}
                    onClick={() => Sair()}
                />
            </Saida>
            <Icons>
                <Link to="/home">
                    {" "}
                    <ion-icon name="home" />{" "}
                </Link>

                {/* adicionar link */}
                <Link to="/creation">
                    {" "}
                    <ion-icon name="add-circle" />{" "}
                </Link>

                <Link to="/cart">
                    {" "}
                    <ion-icon name="cart" />{" "}
                </Link>

                <Link
                    to="/sign-in"
                    className={user.token !== "" ? "disabled-link" : undefined}
                >
                    <ion-icon name="person" />
                </Link>
            </Icons>
        </Container>
    );
}

const Container = styled.div`
    display: ${(props) => (props.entrou ? "initial" : "var(--display-none)")};
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    background-color: #6e0ad6;
`;

const Logo = styled.div`
    height: 100px;
    width: 100%;

    background-color: #eeeeee;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;

    img {
        width: 70px;
        margin-bottom: 5px;
    }

    p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #000000;
        margin-left: 6px;
    }
`;

const Icons = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    ion-icon {
        font-size: 30px;
        color: white;
    }
`;

const Saida = styled.div`
    position: fixed;
    right: 24px;
    top: 24px;
    display: ${(props) =>
        props.aparece ? "var(--display-initial)" : "var(--display-none)"};
`;
