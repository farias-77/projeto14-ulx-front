import styled from "styled-components";
import { useState } from "react";
export default function Creation(){
    const [url,setUrl]=useState('')
    const [nome,setNome]=useState('')
    const [descricao,setDescricao]=useState('')
    const [preco,setPreco]=useState('')
    return (
        <Container> 
            <h1>Venda seus produtos aqui: </h1>
            <Form className="caixa3">
             
             <input type={'text'} value={url} placeholder='Url' onChange={(e) => setUrl(e.target.value)} className="input"></input>
             <input type={'text'} value={nome} placeholder='Nome do produto' onChange={(e) => setNome(e.target.value)} className="input"></input>
             <input type={'text'} value={descricao} placeholder='Descrição do produto' onChange={(e) => setDescricao(e.target.value)} className="input"></input>
             <input type={'number'} value={preco} placeholder='Preço' onChange={(e) => setPreco(e.target.value)} className="input"></input>
     
             <button  className="input1" type="subimit" >Cadastrar</button>
             </Form>     
        </Container>
    )

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