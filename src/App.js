
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './components/ProductList';


function App() {
  const list = [{
    product : "Test",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    poster : "images/test.png",
    price : "50",
  }]
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ProductList" element={<ProductList/>}/>
      <Route path="*" element={<h1 style ={{paddingTop:"300px"}}>404 not found</h1>}/>
    </Routes>
    </div>
  );
}

export default App;
