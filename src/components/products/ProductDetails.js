import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext"
import { ProductContainer, ProductImg, ProductContainerH1, ProductContainerP } from "../styled/StyledProductsPage";
import { ProductDetailsContainer, ProductDetailsImg } from "../styled/StyledProductDetails";
import { CartContext } from "../contexts/CartContext";
import { useState } from "react/cjs/react.development";


const ProductDetails = ({index}, props) => {
    const { products } = useContext(ProductContext);
    const { appendToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState("1");
    let params = useParams();
    const navigate = useNavigate();

    function append(){
        console.log("Quantity: " + quantity)
        appendToCart(products[params.index], Number(quantity));
    }

    function close(){
        navigate("/products");
    }

    var options = []; 
    for (var i = 1; i <= 10; i++) {
        options.push(<option value={i} key={i} >{i}</option>);
    }

    return (
        <ProductDetailsContainer type="div">
              <ProductDetailsImg type="img" src={products[params.index]?.image} />
              <ProductContainerH1>{products[params.index]?.title}</ProductContainerH1>
              <ProductContainerP>{products[params.index]?.price}</ProductContainerP>   
              <ProductContainerP>{products[params.index]?.category}</ProductContainerP>
              <ProductContainerP>{products[params.index]?.description}</ProductContainerP>
              <select 
                name="quantity" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)}>
                  {options}
              </select>
              <button onClick={append}>Add to Cart</button>
              <button onClick={close}>Close</button>
        </ProductDetailsContainer>    
    )
}

export default ProductDetails;