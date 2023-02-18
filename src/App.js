
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './page/Home';
function App() {
  const products =  require('./static/data/product.json')
  return (
    <div className="App">
     
      <Routes>
        <Route path="/home" element={<Home products = {products}/>}></Route> 
        <Route path="/" element={<Home products = {products}/>}></Route> 

      </Routes>
    </div>
  );
}

export default App;
