import styled from 'styled-components';

export const ProductImg = styled.img `
    max-width:50%;
    height:auto;
    margin-left:25%;
`
export const ProductContainer = styled.div`
    display flex;
    flex-wrap:wrap;
    width:300px;
    flex-direction:column;
    height:500px;
    margin:10px auto;
    justify-content:center;
    border-style: solid;
    border-color:#f0f0f0;
    borer-width:2px;
`

export const ProductContainerP = styled.p`
    font-size:14px;
`
export const ProductContainerH1 = styled.h1`
    font-size:16px;
    color:black;
    text-decoration: underline solid;
`
export const ProductPageContainer = styled.div`
    display:flex;
    flex-direction:row;
`
export const ProductOptionsContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:30%;
`

export const ProductListContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
    width:70%;
`
export const ProductOptionsForm = styled.form`
    display:flex;
    flex-direction:column;
`