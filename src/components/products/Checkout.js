import { CheckoutCard, CheckoutCardBox, CheckoutCardDescripBox, CheckoutCardDescrip, CheckoutCardButtonBox, CheckoutCardButton, CheckoutCardList, CheckoutForm} from "../styled/StyledCheckout";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = (props) => {

    const { productCart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    function resetCart(){
        clearCart();
        navigate("/products");

    }

    return (
        <CheckoutCardList>
        { productCart.length > 0 ? (
            <>
            
            <CheckoutForm type="form">
                <h1>Customer Information</h1>
                Name: <input type="text" />
                Shipping Address: <input type="text" />
                Billing Address: <input type="text" />
                Credit Card Info: <input type="text" />
                <input type="submit" onClick={resetCart}/>
            </CheckoutForm>

            <CheckoutCardBox>
            {productCart.map(product =>
                <CheckoutCard type="div">
                    <CheckoutCardDescripBox>
                        <CheckoutCardDescrip>{product.product.title}</CheckoutCardDescrip>
                        <CheckoutCardDescrip>Quantity: {product.quantity}</CheckoutCardDescrip>
                        
                    </CheckoutCardDescripBox>      
                    <CheckoutCardButtonBox>Price: {product.product.price}</CheckoutCardButtonBox>          
                </CheckoutCard>
                /*
                <CheckoutCard 
                    title={product.product.title}
                    price={product.product.price}
                    quantity={product.quantity} />*/
            )}
            </CheckoutCardBox>
            </>
        ) : (
            <p>No items to checkout</p>
        )}
    </CheckoutCardList>
    )
}

export default Checkout;