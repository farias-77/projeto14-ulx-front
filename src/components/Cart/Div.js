import styled from "styled-components";


export default function Divv(){
    return(

<Item>
    
    <img src='https://vejario.abril.com.br/wp-content/uploads/2021/09/gabi-gol-globo.jpg.jpg' alt='imagem produto' />
    <Caixa>
        <h3>Gabriel Barbosa</h3>
        <h4>O melhor atacante do brasil hoje tem gol do gabigol</h4>
        <h5>R$ 90M</h5>
    </Caixa>
    <button>Excluir</button>
  <Deletar></Deletar>
   
   
</Item>

)
}
const Deletar= styled.div`
width: 150px;
height:125px;
background:#A328D6;
display: none;
position: absolute;
right: 109px;
bottom: 0px;
}
`;
const Item = styled.div`
position: relative;
margin-left: 15px;
display: flex;
background: white;
margin-bottom: 15px;
dispaly:flex;
justify-content: space-between;
img{
    object-fit: cover;
    width: 160px;
    height:125px;
    border-radius: 4px;
}
`;


const Caixa = styled.div`
width: 244px;
height:125px;

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