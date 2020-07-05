import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding:3rem;
    border-radius:.5rem;
    background-color:#fff;
    max-width:800px;
    margin-top:20rem;

    h1{
        font-family:Arial, Helvetica, sans-serif;
        text-align:center;
        position:relative;
        padding-left:4rem;

        &::before{
            content:open-quote;
            font-size:8rem;
            color:black;
            position:absolute;
            left:-1rem;
            top:-3rem;
        }
    }

    p{
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size:1.6rem;
        text-align:right;
        color:#666;
        margin-top:2rem;
        font-weight:bold;
    }
`;

const Frase = ({frase}) => {

 
    const {quote , author} = frase;

    return ( 
        <ContenedorFrase>
            <h1>{quote}</h1>
            <p>-{author}</p>
        </ContenedorFrase>

     );
}
 
export default Frase;