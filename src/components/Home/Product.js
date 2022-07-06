import styled from "styled-components";

export default function Product({ image, name, description, price }){

    return (
        <Container>
            <img src={image} alt='imagem produto' />
            <Info>
                <h3>{name}</h3>
                <h4>{description}</h4>
                <h5>R${price}</h5>
            </Info>
        </Container>
    )
}

const Container = styled.div`
    width: 172px;   
    height: 216px;

    background: #FFFFFF;
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;

    padding: 18px;
    margin-right: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img{
        object-fit: cover;
        width: 144px;
        height:87px;
        border-radius: 4px;
    }
`;

const Info = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 5px;

    font-family: 'Roboto';
    font-style: normal;

    h3{
        
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    h4{
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #A6A6A6;

        margin: 3px 0;
    }

    h5{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }
`;