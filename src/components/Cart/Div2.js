import styled from "styled-components";

export default function Div2(props) {
    // const {ab,email,url,name,description,category,price,id} =props
    const { url, name, description, price } = props;
    return (
        <Item>
            <img src={url} alt="imagem produto" />

            <Caixa>
                <h3>{name}</h3>
                <h4>{description}</h4>
                <h5>R$ {price}</h5>
            </Caixa>
        </Item>
    );
}

const Item = styled.div`
    position: relative;
    margin-left: 15px;
    display: flex;
    background: white;
    margin-bottom: 15px;

    img {
        object-fit: cover;
        width: 160px;
        height: 125px;
        border-radius: 4px;
    }
`;

const Caixa = styled.div`
    width: 244px;
    height: 125px;

    h3 {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    h4 {
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #a6a6a6;

        margin: 3px 0;
    }

    h5 {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }
`;
