
import './App.css';
import { Home } from './Homepage/Home';
import {BrowserRouter} from 'react-router-dom'

// import ProductCard from './AllProductPage/mens/product/mens.card';
function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Home />
{/* <ProductCard/> */}
    
    </div>
    </BrowserRouter>
  );
}

export default App;
