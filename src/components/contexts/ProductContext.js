import React, { useState, useEffect } from 'react';

const ProductContext = React.createContext("products");

const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
          await fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>setProducts(json));
        }
        getProducts();
    }, [])

    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider};