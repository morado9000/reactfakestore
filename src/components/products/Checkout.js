import { CheckoutCard, CheckoutCardBox, CheckoutCardDescripBox, CheckoutCardDescrip, CheckoutCardButtonBox, CheckoutCardButton, CheckoutCardList, CheckoutForm, CheckoutTotal} from "../styled/StyledCheckout";
//import { useContext } from "react";
//import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { selectCart } from "../../features/cartSlice";
import { clearCart } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Checkout = (props) => {

 //   const { productCart, clearCart } = useContext(CartContext);
    const productCart = useSelector(selectCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function resetCart(){
        dispatch(clearCart());
        navigate("/products");

    }

    const sum = () => {
        let mysum = 0;
        for(var i=0; i<productCart.length; i++){
            mysum += (Number(productCart[i].product.price)*productCart[i].quantity);
        }
        return mysum;
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
                <button type="submit" onClick={resetCart}>Submit</button>
            </CheckoutForm>

            <CheckoutCardBox>
            {productCart.map(product =>
                <>
                    <CheckoutCard type="div">
                        <CheckoutCardDescripBox>
                            <CheckoutCardDescrip>{product.product.title}</CheckoutCardDescrip>
                            <CheckoutCardDescrip>Quantity: {product.quantity}</CheckoutCardDescrip>
                            
                        </CheckoutCardDescripBox>      
                        <CheckoutCardButtonBox>Price: {product.product.price}</CheckoutCardButtonBox>          
                    </CheckoutCard>
                    <CheckoutTotal>Total: ${sum()}</CheckoutTotal>
                 </>
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