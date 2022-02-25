import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductListContainer, ProductOptionsContainer, ProductPageContainer } from "../styled/StyledProductsPage";
import ProductCard from "./ProductCard";
import { quickSortProducts, quickSortProductsReverse } from "../utils";
import { useParams } from "react-router-dom";

const ProductList = (props) => {
    const { products } = useContext(ProductContext);

    const [productList, setProductList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    let params = useParams();
    console.log("Param index: " + params.index)

    function changeCategory(e){
        let tempList = [];
        for(var i=0; i < products.length; i++){
            if(products[i].category === e.target.value){
                tempList.push(products[i]);
            }
        }
        setProductList([...tempList]);
    }

    function sortHighest(){
        let tempList = [...productList];
        quickSortProductsReverse(tempList, 0, tempList.length-1);
        setProductList(tempList);
    }

    function sortLowest(){
        let tempList = [...productList];
        quickSortProducts(tempList, 0, tempList.length-1);
        setProductList(tempList);
    }

    function onSearchChange(e){
        setSearchTerm(e.target.value);
    }

    function searchList(e){
        e.preventDefault();
        let tempList = [];
        for(var i=0; i < products.length; i++){
            if(products[i].title.includes(searchTerm)){
                tempList.push(products[i]);
            }
        }
        setProductList([...tempList]);
    }
   

    useEffect(() => {
        setProductList([...products]);
    }, [products.length, products])

    return (
        <ProductPageContainer>
            <ProductOptionsContainer>
                <h2>Filter By Category</h2>
                <form>
                    <input type="radio" name="category" id="none" value="none" onClick={() => setProductList([...products])} />
                    <label for="none">None</label>

                    <input type="radio" name="category" id="men" value="men's clothing" onClick={changeCategory} />
                    <label for="men">Men's Clothing</label>

                    <input type="radio" name="category" id="women" value="women's clothing" onClick={changeCategory} />
                    <label for="women">Women's Clothing</label>

                    <input type="radio" name="category" id="jewel" value="jewelery" onClick={changeCategory} />
                    <label for="jewel">Jewelery</label>

                    <input type="radio" name="category" id="electronics" value="electronics" onClick={changeCategory} />
                    <label for="electronics">Electronics</label>
                    
                </form>

                <h2>Order By Price</h2>
                <form>
                    <input type="radio" name="price" id="highest" onClick={sortHighest}/>
                    <label for="highest">Highest to Lowest</label>

                    <input type="radio" name="price" id="lowest" onClick={sortLowest}/>
                    <label for="lowest">Lowest to Highest</label>
                </form>

                <h2>Search</h2>
                <form onSubmit={searchList}>
                    <input type="text" onChange={onSearchChange} />
                    <button type="submit">Search</button>
                </form>
            </ProductOptionsContainer>
            <ProductListContainer type="div">
            { productList.length > 0 ? (
                !params.index ? (
                    <>
                    {productList.map(product =>
                    <ProductCard 
                        title={product.title}
                        price={product.price}
                        imageUrl={product.image}
                        product={product} />
                )}
                    </>
                ) : (
                    <>
                    </>
                )
            ) : (
                <p>Loading</p>
            )}
            </ProductListContainer>
        </ProductPageContainer>
    )
}

export default ProductList;