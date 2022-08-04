import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/AboutUs/About';
import Dashbord from './Components/Dashbord/Dashbord';
import ChackOut from './Components/Home/home/ChackOut';
import Home from './Components/Home/home/Home';
import Products from './Components/Home/home/Products';
import SingelProduct from './Components/Home/home/SingelProduct';
import Nav from './Components/Home/nav/Nav';
import Login from './Components/Login/Login';
import Singin from './Components/Login/Singin';
import Footer from './Components/Shared/Footer';
import { ToastContainer } from 'react-toastify';
import User from './Components/Dashbord/User';
import Order from './Components/Dashbord/Oder';
import RequireAuth from './Components/Shared/Hook/RequireAuth';

function App() {
  return (
    <div className='ml-5 mr-5'>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singin' element={<Singin></Singin>}></Route>
        <Route path='/product' element={<Products></Products>}></Route>
        <Route path='/chackOut' element={<ChackOut></ChackOut>}></Route>
        <Route path='/dashbord' element={<Dashbord></Dashbord>}>
          <Route path='user' element={<User></User>}></Route>
          <Route path='order' element={<Order></Order>}></Route>
        </Route>
        <Route path='/sProduct/:id' element={<RequireAuth>
          <SingelProduct></SingelProduct>
        </RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
