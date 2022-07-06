import styled from "styled-components";
import Product from "./Product.js";

export default function Home(){

    return (
        <Container>
            <Products>
                <Product image='https://vejario.abril.com.br/wp-content/uploads/2021/09/gabi-gol-globo.jpg.jpg' name='Gabriel Barbosa' description='O melhor atacante do brasil hoje tem gol do gabigol' price='90M'/>
            </Products>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 150px;

    position: fixed;
    top: 0;
    bottom: 0;
    background-color: #eeeeee;
`;

const Products = styled.div`
    
`;