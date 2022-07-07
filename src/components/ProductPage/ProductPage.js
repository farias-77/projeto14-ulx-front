import styled from "styled-components";

export default function ProductPage(){

    return (
        <Container>
            <img src='https://vejario.abril.com.br/wp-content/uploads/2021/09/gabi-gol-globo.jpg.jpg' alt='imagem produto' />
            <ProductInfo>
                <h2>Gabriel Barbosa</h2>
                <h4>R$ 90M</h4>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </ProductInfo>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

    margin-top: 150px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        object-fit: cover;
        width: 100%;
        border-radius: 10px;
        box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
    }

    background-color: #eeeeee;
`;

const ProductInfo = styled.div`
    width: 100%;

    margin-top: 30px;

    h2{
        font-weight: 700;
        font-size: 30px;
        color: #000000;
    }

    h4{
        font-weight: 500;
        font-size: 25px; 

        margin: 15px 0;
    }

    h3{
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #000000;

        margin: 3px 0;
    }
`;