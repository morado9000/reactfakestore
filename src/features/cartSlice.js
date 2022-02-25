import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productCart: [],
    },
    reducers: {
        appendToCart: (state, action) => {
            const { product, quantity } = action.payload;
            for(var i=0; i<state.productCart.length; i++){
                if(product.id == state.productCart[i].product.id){
                    console.log("Repeat")
                    state.productCart[i].quantity += quantity;
                    
                    return;
                }
            }
            state.productCart.push({
                product: product,
                quantity: quantity
            })
        },
        deleteFromCart: (state, action) => {
            const { index } = action.payload;
            state.productCart.splice(index, 1);
        },
        clearCart: (state) => {
            state.productCart = [];
        }
    }
});

export const { appendToCart, deleteFromCart, clearCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.productCart;
export default cartSlice.reducer;