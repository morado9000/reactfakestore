import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../contexts/CartContext';
import { ProductImg, ProductContainer, ProductContainerP, ProductContainerH1 } from '../styled/StyledProductsPage';

const ProductCard = ({title, price, imageUrl, product, quantity, index}, props) => {
    const { deleteFromCart } = useContext(CartContext);

    function deleteProduct(){
        deleteFromCart(index);
    }

    return (
        <ProductContainer type="div">
              <ProductImg type="img" src={imageUrl} />
              <Link to={'/products/' + (product.id-1)} style={{ textDecoration: 'none' }} >
                <ProductContainerH1 >{title}</ProductContainerH1>
              </Link> 
              <ProductContainerP>${price}</ProductContainerP>  
              {quantity >= 1 ? (
                  <>
                    <ProductContainerP>{quantity}</ProductContainerP>
                    <button onClick={deleteProduct}>Delete</button>
                  </>
                  
              ) : (
                  <>
                  </>
              )} 
        </ProductContainer>    
    )
}

export default ProductCard;