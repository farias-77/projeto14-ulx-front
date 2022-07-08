import { useContext, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product.js";

import { AuthContext } from "../../providers/Auth.js";

export default function Home() {
    const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
        setUser({
            ...user,
            entrou: true,
        });
    }, []);

    return (
        <Container>
            <Category>
                <h1>Casa </h1>
                <Products>
                    <Product
                        image="https://vejario.abril.com.br/wp-content/uploads/2021/09/gabi-gol-globo.jpg.jpg"
                        name="Gabriel Barbosa"
                        description="O melhor atacante do brasil hoje tem gol do gabigol"
                        price="90M"
                    />
                    <Product
                        image="https://vejario.abril.com.br/wp-content/uploads/2021/09/gabi-gol-globo.jpg.jpg"
                        name="Gabriel Barbosa"
                        description="O melhor atacante do brasil hoje tem gol do gabigol"
                        price="90M"
                    />
                    <Product
                        image="https://vejario.abril.com.br/wp-content/uploads/2021/09/gabi-gol-globo.jpg.jpg"
                        name="Gabriel Barbosa"
                        description="O melhor atacante do brasil hoje tem gol do gabigol"
                        price="90M"
                    />
                    <Product
                        image="https://vejario.abril.com.br/wp-content/uploads/2021/09/gabi-gol-globo.jpg.jpg"
                        name="Gabriel Barbosa"
                        description="O melhor atacante do brasil hoje tem gol do gabigol"
                        price="90M"
                    />
                </Products>
            </Category>
            <Category>
                <h1>Esporte e lazer </h1>
                <Products>
                    <Product
                        image="https://play-lh.googleusercontent.com/9EuLX3VSldq04CPSZ2s6aL-SG1VDTFCtLg9ng3d2bhJofpaN4mZmEQqsqdrmah92r90"
                        name="Flamengo"
                        description="O melhor time do brasil hoje tem gol do gabigol"
                        price=""
                    />
                    <Product
                        image="https://play-lh.googleusercontent.com/9EuLX3VSldq04CPSZ2s6aL-SG1VDTFCtLg9ng3d2bhJofpaN4mZmEQqsqdrmah92r90"
                        name="Flamengo"
                        description="O melhor time do brasil hoje tem gol do gabigol"
                        price=""
                    />
                    <Product
                        image="https://play-lh.googleusercontent.com/9EuLX3VSldq04CPSZ2s6aL-SG1VDTFCtLg9ng3d2bhJofpaN4mZmEQqsqdrmah92r90"
                        name="Flamengo"
                        description="O melhor time do brasil hoje tem gol do gabigol"
                        price=""
                    />
                    <Product
                        image="https://play-lh.googleusercontent.com/9EuLX3VSldq04CPSZ2s6aL-SG1VDTFCtLg9ng3d2bhJofpaN4mZmEQqsqdrmah92r90"
                        name="Flamengo"
                        description="O melhor time do brasil hoje tem gol do gabigol"
                        price=""
                    />
                </Products>
            </Category>
            <Category>
                <h1>Eletrônicos e celulares: </h1>
                <Products>
                    <Product
                        image="https://flamengorj.com.br/arquivos/noticia/9f936923-468a-4128-832a-615636170f43_conteudo.jpg"
                        name="Maracanã"
                        description="gigante esse é gigante"
                        price=""
                    />
                    <Product
                        image="https://flamengorj.com.br/arquivos/noticia/9f936923-468a-4128-832a-615636170f43_conteudo.jpg"
                        name="Maracanã"
                        description="gigante esse é gigante"
                        price=""
                    />
                    <Product
                        image="https://flamengorj.com.br/arquivos/noticia/9f936923-468a-4128-832a-615636170f43_conteudo.jpg"
                        name="Maracanã"
                        description="gigante esse é gigante"
                        price=""
                    />
                    <Product
                        image="https://flamengorj.com.br/arquivos/noticia/9f936923-468a-4128-832a-615636170f43_conteudo.jpg"
                        name="Maracanã"
                        description="gigante esse é gigante"
                        price=""
                    />
                </Products>
            </Category>
            <Category>
                <h1>Moda e beleza</h1>
                <Products>
                    <Product
                        image="https://flamengorj.com.br/arquivos/noticia/9f936923-468a-4128-832a-615636170f43_conteudo.jpg"
                        name="Maracanã"
                        description="gigante esse é gigante"
                        price=""
                    />
                    <Product
                        image="https://flamengorj.com.br/arquivos/noticia/9f936923-468a-4128-832a-615636170f43_conteudo.jpg"
                        name="Maracanã"
                        description="gigante esse é gigante"
                        price=""
                    />
                    <Product
                        image="https://flamengorj.com.br/arquivos/noticia/9f936923-468a-4128-832a-615636170f43_conteudo.jpg"
                        name="Maracanã"
                        description="gigante esse é gigante"
                        price=""
                    />
                    <Product
                        image="https://flamengorj.com.br/arquivos/noticia/9f936923-468a-4128-832a-615636170f43_conteudo.jpg"
                        name="Maracanã"
                        description="gigante esse é gigante"
                        price=""
                    />
                </Products>
            </Category>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin-top: 150px;
    padding-left: 19px;
    background-color: #eeeeee;

    overflow-x: scroll;
`;

const Products = styled.div`
    width: 100%;
    height: 216px;
    overflow-y: scroll;

    display: flex;
`;

const Category = styled.div`
    margin-top: 20px;

    h1 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 32px;
        letter-spacing: 0.018em;
        color: #333333;

        margin-bottom: 15px;
    }
`;
