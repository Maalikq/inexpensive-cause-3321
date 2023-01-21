


   

import './App.css';
// import ProductCard from './AllProductPage/mens/product/mens.card';
import MensProducts from './AllProductPage/mens/product/mens';
import Cart from './components/Cart';
import Allroute from './components/Allroute';
import Navbar from './components/Navbar';
import Cartapi from './components/Cartapi';
function App() {
  return (
    <div className="App">
      
       <Navbar/>
       <Allroute/>

       <Cartapi/>
    

    </div>
  );
}

export default App;
