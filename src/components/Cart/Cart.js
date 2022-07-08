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
           <Container2>
           <Button >Finalizar pedido</Button>
           </Container2>
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
const Container2 = styled.div`
   width: 100%;
   display:flex;
   align-items:center;
   justify-content:center;

`;
const Button = styled.button`
    height: 50px;
    width: 120px;
   
    margin-top:10px;
    margin-bottom:10px;
    background:rgb(110, 10, 214);
    border-radius:4px;

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
