import styled from "styled-components";
import "./deletar.css";
import { useState } from "react";
export default function Divv(){
    const [chave,setChave]=useState('deletar')
   
    function deletar(){
        if(chave==='deletar'){
            setChave('deletar2')
        }else{
            setChave('deletar')
        }

    }
    return(

<Item>
    <Div>
    <img src='https://vejario.abril.com.br/wp-content/uploads/2021/09/gabi-gol-globo.jpg.jpg' alt='imagem produto' />
    <Caixa>
        <h3>Gabriel Barbosa</h3>
        <h4>O melhor atacante do brasil hoje tem gol do gabigol</h4>
        <h5>R$ 90M</h5>
    </Caixa>
    </Div>
    <button onClick={deletar}>Excluir</button>

  <div className={chave}>Excluir do carrinho?
  <Div>
  <Sim>
    <p>SIM</p>
  </Sim>
  <Nao onClick={deletar}>
    <p>NÃO</p>
  </Nao>
  </Div>
  </div>
   
   
</Item>

)
}
const Div= styled.div`
    display:flex;

`;
const Sim= styled.div`
margin-right:30px;
color:hsl(28, 99%, 50%);


`;
const Nao= styled.div`
color:rgb(110, 10, 214);

`;
const Deletar= styled.div`
width: 150px;
height:125px;

display: none;
position: absolute;
right: 109px;
bottom: 0px;

`;
const Item = styled.div`
position: relative;
margin-left: 15px;
display: flex;
background: white;
margin-bottom: 15px;
display:flex;
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