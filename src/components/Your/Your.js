import styled from "styled-components";
import Divv from "./Div.js";
export default function your(){
    const n=[1,2,3,4,5]
    return (
        <Container> 
            <h1>Seus produtos: </h1>
           <Div>
           {n.map((ns)=>{
            return(
                <>
                    <Divv></Divv>
                </>
                )
            })}
          
           </Div>
          
            
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
const Div = styled.div`
height: 500px;
width: 336px;

overflow-Y: scroll;
`;
