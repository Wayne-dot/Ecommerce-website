import Home from './pages/Home';
import Account from './pages/Account';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Architecture from './pages/Architecture';

import Navbar from './components/Narbar';
// import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route 
              path="/"
              element = {<Home/>}
            />

            <Route 
              path="/account"
              element = {<Account/>}
            />

            <Route 
              path="/checkout"
              element = {<Checkout/>}
            />

            <Route 
              path="/about"
              element = {<About/>}
            />

            <Route 
              path="/architecture"
              element = {<Architecture/>}
            />

          </Routes>
        </div>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
