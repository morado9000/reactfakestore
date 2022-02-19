import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CartContext } from "./contexts/CartContext";
import { Header, HeaderH1, HeaderLinks, HeaderP, HeaderTitle } from "./styled/StyledAppHeader";
import { Link } from "react-router-dom";
import App from "../App";
import { Navigate, useLocation } from "react-router-dom";

const AppHeader = (props) => {
    const { productCart } = useContext(CartContext);

    let location = useLocation();
    
    return (
        <>
            <Header>
                <HeaderTitle>
                    <HeaderH1>Fake Store</HeaderH1>
                </HeaderTitle>
                <HeaderLinks>
                    <Link to="/products" style={{ textDecoration: 'none' }}><HeaderP>Home</HeaderP></Link>
                    <Link to="/cart" style={{ textDecoration: 'none' }}><HeaderP>Cart Items: {productCart?.length}</HeaderP></Link>
                    <Link to="/checkout" style={{ textDecoration: 'none' }}><HeaderP>Checkout</HeaderP></Link>
                </HeaderLinks>
            </Header>
            
            <Outlet />
        </>
        
    )
}

export default AppHeader;