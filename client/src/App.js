import Home from './pages/home';
import Account from './pages/Account';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Architecture from './pages/Architecture';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import Product from './pages/Product';


import Navbar from './components/Narbar';
// import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './pages/Create';


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
            
            {/* Dynamic route */}
            <Route 
              path="/product/:id"
              element = {<Product/>}
            />

            <Route 
              path="/account"
              element = {<Account/>}
            />

            <Route 
              path="/account/signup"
              element = {<Signup/>}
            />

            <Route 
              path="/account/login"
              element = {<Login/>}
            />

            <Route 
              path="/account/ForgetPassword"
              element = {<ForgetPassword/>}
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

            <Route 
              path = "/create"
              element = {<Create/>}
            />

          </Routes>
        </div>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
