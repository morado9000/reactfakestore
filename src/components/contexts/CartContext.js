import React, { useState } from 'react';

const CartContext = React.createContext('cart');

const CartProvider = (props) => {
    const [productCart, setProductCart] = useState([]);

    function appendToCart(product, quantity) {
        let tempCart = [...productCart];
        for(var i=0; i<tempCart.length; i++){
            if(product.id == tempCart[i].product.id){
                tempCart[i].quantity = tempCart[i].quantity + quantity;
                setProductCart(tempCart);
                return;
            }
        }
        tempCart.push({
            product: product,
            quantity: quantity
        })
        setProductCart(tempCart);
    }

    function deleteFromCart(index) {
        let tempCart = [...productCart];
        console.log(index);
        tempCart.splice(index, 1);
        setProductCart(tempCart);
    }

    function clearCart(){
        setProductCart([]);
    }

    return (
        <CartContext.Provider value={{productCart, setProductCart, appendToCart, deleteFromCart, clearCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}