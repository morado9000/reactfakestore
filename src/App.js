import { Outlet } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import ProductDetails from './components/products/ProductDetails';
import ProductList from './components/products/ProductList';

function App() {

  return (
    <div className="App">      
      <ProductList />
      <Outlet />
    </div>
  );
}

export default App;