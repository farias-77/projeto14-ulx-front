import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function Header(){
    return (
        <Container>
            <Logo>
                <img src={logo} alt="logo" />
                <p>O seu marketplace de confiança</p>
            </Logo>
            <Icons>
                <ion-icon name="home"></ion-icon>
                <ion-icon name="storefront"></ion-icon>
                <ion-icon name="cart"></ion-icon>
                <ion-icon name="person"></ion-icon>
            </Icons>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    background-color: #6E0AD6;
`;  

const Logo = styled.div`
    height: 100px;
    width: 100%;

    background-color: #eeeeee;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;

    img{
        width: 70px;
        margin-bottom: 5px;
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #000000;
        margin-left: 6px
    }
`;

const Icons = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    ion-icon{
        font-size: 30px;
        color: white;
    }
`;