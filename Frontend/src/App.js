


   

import './App.css';
// import ProductCard from './AllProductPage/mens/product/mens.card';
import MensProducts from './AllProductPage/mens/product/shoes';
import Tshirt from './AllProductPage/mens/product/tShirt';
import Sarees from './AllProductPage/womens/Sarees';
import Skin from './AllProductPage/beauty/Skin';
import Cart from './components/Cart';
import Allroute from './components/Allroute';
function App() {
  return (
    <div className="App">
       <Allroute/>
       <Cart/> 
       {/* <Skin/> */}
{/* <MensProducts/> */}
    {/* <Sarees/> */}
{/* <Tshirt/> */}
    </div>
  );
}

export default App;
