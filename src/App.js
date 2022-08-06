import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashbord from './Components/Dashbord/Dashbord';
import SingelProduct from './Components/Home/home/SingelProduct';
import Nav from './Components/Home/nav/Nav';
import Footer from './Components/Shared/Footer';
import { ToastContainer } from 'react-toastify';
import User from './Components/Dashbord/User';
import Order from './Components/Dashbord/Oder';
import RequireAuth from './Components/Shared/Hook/RequireAuth';
import Profile from './Components/Dashbord/Profile';
import AddProduct from './Components/Dashbord/AddProduct';
import PublicRoute from './Route/PublicRoute';
import PrivetRoute from './Route/PrivetRoute';
import RequerAdmin from './Components/Shared/Hook/RequerAdmin';
import AddRevew from './Components/Dashbord/AddRevew';

function App() {
  return (
    <div className='ml-5 mr-5'>
      <Nav></Nav>
      <Routes>
        {
          PublicRoute.map(({path , Compo} , index)=>(
            <Route key={index} path={path} element={<Compo></Compo>}></Route>
          ))
        }
        <Route path='/dashbord' element={<Dashbord></Dashbord>}>
          <Route path='user' element={<RequerAdmin>
            <User></User>
          </RequerAdmin>}></Route>
          <Route path='order' element={<Order></Order>}></Route>
          <Route path='revew' element={<AddRevew></AddRevew>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
        </Route>
        {/* <Route element={<RequireAuth />}> */}
          {/* {
            PrivetRoute.map(({path , Compo},index) =>(
              <Route key={index} path={path} element={<Compo></Compo>}/>
            ))
          } */}
        {/* </Route> */}
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
