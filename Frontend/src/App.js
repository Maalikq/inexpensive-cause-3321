


   

import './App.css';
// import ProductCard from './AllProductPage/mens/product/mens.card';
import MensProducts from './AllProductPage/mens/product/mens';
import Cart from './components/Cart';
import Allroute from './components/Allroute';
function App() {
  return (
    <div className="App">
      <Allroute/>
       <Cart/>
<MensProducts/>
    

    </div>
  );
}

export default App;
