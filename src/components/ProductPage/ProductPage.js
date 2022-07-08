import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductPage() {
    
    const productId = useParams();
    const userInfo = localStorage.getItem("usuario")
    // inicializar vazio para preencher com dados do db
    const [ product, setProduct ] = useState({ 
        name: "Gabriel Barbosa",
        price: "90M",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo orci, ornare et enim id, hendrerit condimentum est. Mauris sit amet condimentum ante. Fusce molestie posuere eleifend. Sed facilisis massa et diam mattis rhoncus. Sed bibendum urna et lacus ultricies mollis. Vestibulum fermentum sed massa non finibus. Morbi tempor sed arcu sollicitudin suscipit. Nunc eleifend lorem eu nisi lobortis, vitae ullamcorper urna gravida. Etiam pharetra pellentesque molestie. Fusce ut ipsum nec mauris maximus rutrum. Vestibulum mauris nisi, euismod vel efficitur id, auctor vitae tortor. Phasellus tincidunt aliquet porta. Nulla suscipit ac dolor id egestas. Proin hendrerit, turpis non ullamcorper vehicula, leo dolor vulputate nisi, quis tincidunt dui velit quis sapien",
        url: "https://vejario.abril.com.br/wp-content/uploads/2021/09/gabi-gol-globo.jpg.jpg"
    })

    useEffect(() => {

        // const URL = `https://ulx-store.herokuapp.com/product/${productId}`;
        // const config = {
        //     headers: {
        //         "Authorization": `Bearer ${userInfo.token}`
        //     }
        // }
        // const promise = axios.get(URL, config);
        //  atualizar com dados do db
        // promise.then(() => {
        //     setProduct({...product}); 
        // })
        setProduct({...product});
        console.log(userInfo)
        console.log(productId)
    }, []);
    
    return (
        <Container>
            <img
                src={ product.url ? product.url : "loading..." }
                alt="imagem produto"
            />
            <ProductInfo>
                <h2>{ product.name ? product.name : "loading..." }</h2>
                <h4>{ product.price ? product.price : "loading..." }</h4>
                <h3>{ product.description ? product.description : "loading..."}</h3>
            </ProductInfo>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;

    margin-top: 150px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
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

    h2 {
        font-weight: 700;
        font-size: 30px;
        color: #000000;
    }

    h4 {
        font-weight: 500;
        font-size: 25px;

        margin: 15px 0;
    }

    h3 {
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #000000;

        margin: 3px 0;
    }
`;
