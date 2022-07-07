import styled from "styled-components";
import Divv from "./Div.js";
import Div2 from "./Div2.js";
export default function Cart(){
    const n=[1,2,3,4,5]
    return (
        <Container> 
            <h1>Seu carrinho: </h1>
           <Div>
           {n.map((ns)=>{
            return(
                <>
                    <Divv></Divv>
                </>
                )
            })}
           </Div>
           <Button >Finalizar pedido</Button>
           <h1>Seu histórico de compras </h1>
           <Div>
           {n.map((ns)=>{
            return(
                <>
                    <Div2></Div2>
                </>
                )
            })}
           </Div>
            
        </Container>
    )

}
const Button = styled.button`
    height: 30px;
    width: 110px;
    margin-left:200px;
background:#A328D6;

`;
const Container = styled.div`
    
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
const Div = styled.div`
height: 500px;
width: 100%;

overflow-Y: scroll;
`;
