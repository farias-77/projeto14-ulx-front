import { useState } from "react";
import axios from "axios";

import styled from "styled-components";
import Divv from "./Div.js";

export default function Your(props) {
    const { email } = props;
    // const n=[1,2,3,4,5]
    const [caixa, setCaixa] = useState([]);

    function ab() {
        const promise = axios.post(
            "https://ulx-store.herokuapp.com/YourProduct",
            {
                email,
            }
        );
        promise.then((response) => {
            // console.log('oi')
            // console.log(response.data)
            setCaixa([...response.data]);
        });
    }
    return (
        <Container>
            <button type="button" className="visualizar" onClick={ab}>
                Visualize seus produtos
            </button>
            <h1>Seus produtos: </h1>
            <Div>
                {caixa.map((ns) => (
                    <Divv
                        emai={email}
                        url={ns.url}
                        name={ns.name}
                        description={ns.description}
                        category={ns.category}
                        price={ns.price}
                        id={ns._id}
                    />
                ))}
            </Div>
        </Container>
    );
}
const Container = styled.div`
    width: 100%;
    margin-top: 150px;
    padding-left: 19px;
    background-color: #eeeeee;
    h1 {
        font-family: "Roboto";
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
    overflow-y: scroll;
`;
