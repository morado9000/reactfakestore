import { Outlet } from "react-router-dom";
import { selectCart } from "../features/cartSlice"
import { Header, HeaderH1, HeaderLinks, HeaderP, HeaderTitle } from "./styled/StyledAppHeader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AppHeader = (props) => {
    const productCart = useSelector(selectCart);

    
    return (
        <>
            <Header>
                <HeaderTitle>
                    <HeaderH1>This Is (Not) A Real Store</HeaderH1>
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