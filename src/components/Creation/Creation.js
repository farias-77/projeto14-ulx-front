import styled from "styled-components";
import { useState } from "react";
import "./botao.css";
export default function Creation(){
    const [url,setUrl]=useState('')
    const [nome,setNome]=useState('')
    const [descricao,setDescricao]=useState('')
    const [preco,setPreco]=useState('')
    const [botao1,setBotao1]=useState('botao')
    const [botao2,setBotao2]=useState('botao2')
    const [botao3,setBotao3]=useState('botao2')
    const [botao4,setBotao4]=useState('botao2')
    let categoria ='categoria1'
    function Botao1(b,a){
        categoria=a
        if(b =='botao2'){
            setBotao1('botao')
            setBotao2('botao2')
            setBotao3('botao2')
            setBotao4('botao2')
        }       
    }
    function Botao2(b,a){
        categoria=a
        if(b =='botao2'){
            setBotao2('botao')
            setBotao1('botao2')
            setBotao3('botao2')
            setBotao4('botao2')
        }       
    }
    function Botao3(b,a){
        categoria=a
        if(b =='botao2'){
            setBotao3('botao')
            setBotao2('botao2')
            setBotao1('botao2')
            setBotao4('botao2')
        }       
    }
    function Botao4(b,a){
        categoria=a
        if(b =='botao2'){
            setBotao4('botao')
            setBotao2('botao2')
            setBotao3('botao2')
            setBotao1('botao2')
        }       
    }
    return (
        <Container> 
            <h1>Venda seus produtos aqui: </h1>
            <p>categorias:</p>
            <div>
                <button className={botao1} onClick={()=> Botao1(botao1,'casa')}>casa</button> <button onClick={()=>Botao2(botao2,'esporte')} className={botao2}>Esporte e lazer</button> <button onClick={()=>Botao3(botao3,'eletronicos')} className={botao3}>Eletronicos e celulares</button> <button onClick={()=>Botao4(botao4,'moda')} className={botao4}>Moda e beleza</button>
            </div>
            <Form className="caixa3">
             
             <input type={'text'} value={url} placeholder='Url' onChange={(e) => setUrl(e.target.value)} className="input"></input>
             <input type={'text'} value={nome} placeholder='Nome do produto' onChange={(e) => setNome(e.target.value)} className="input"></input>
             <input type={'text'} value={descricao} placeholder='Descrição do produto' onChange={(e) => setDescricao(e.target.value)} className="input"></input>
             <input type={'number'} value={preco} placeholder='Preço' onChange={(e) => setPreco(e.target.value)} className="input"></input>
            
             <button  className="input1" type="subimit" >Cadastrar</button>
             </Form> 
             
        </Container>
    )
 //
}
const Container = styled.div`
    width: 100%;
    margin-top: 150px;
    padding-left: 19px;
    background-color: #eeeeee;
    h1 {        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 32px;
        letter-spacing: 0.018em;
        color: #333333;

        margin-bottom: 15px;
    }
    
    
`;
const Form  = styled.form`
    display: flex;
    flex-direction: column;
    
`;