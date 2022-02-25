import { Outlet } from 'react-router-dom';
import './App.css';
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