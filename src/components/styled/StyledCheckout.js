import styled from "styled-components";

export const CheckoutCardList = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
`

export const CheckoutCard = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 20px;
    padding: 10px;
    border-bottom: solid 2px grey
`

export const CheckoutCardBox = styled.div`
    display:flex;
    flex-direction:column;
    width:20%;
`

export const CheckoutCardDescripBox = styled.div`
    display:flex;
    justify-content:left;
    flex-wrap:nowrap;
    align-items:center;
`

export const CheckoutCardDescrip = styled.p`
    margin-left:20px;
    border-right-style: solid;
    border-right-color: #f0f0f0;
`

export const CheckoutCardButtonBox = styled.div`
    display:flex;
    margin-left:auto;
    align-items:center;
`
export const CheckoutCardButton = styled.button`
    color:white;
    background-color:grey;
    border-radius:50%;
    border:none;
    font-size:20px;
`
export const CheckoutForm = styled.form`
    display:flex;
    flex-direction: column;
    width:40%;
    margin-bottom:10px;
`
export const CheckoutTotal = styled.div`
    display:flex;
    justify-content:right;
`