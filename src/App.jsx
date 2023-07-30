
import './App.css';
import { Routes, Route } from 'react-router-dom'
import CartItems from './screens/CartItems';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/cart' element={<CartItems/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;


