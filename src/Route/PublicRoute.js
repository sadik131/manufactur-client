import About from "../Components/AboutUs/About";
import ChackOut from "../Components/Home/home/ChackOut";
import Home from "../Components/Home/home/Home";
import Product from "../Components/Home/home/Product";
import Products from "../Components/Home/home/Products";
import AllRevew from "../Components/Home/revew/AllRevew";
import Login from "../Components/Login/Login";
import Singin from "../Components/Login/Singin";

const PublicRoute = [
    { id: 1, path: '/', Compo: Home },
    { id: 2, path: '/about', Compo: About },
    { id: 3, path: '/login', Compo: Login },
    { id: 4, path: '/singin', Compo: Singin },
    { id: 5, path: '/products', Compo: Products },
    { id: 6, path: '/chackOut', Compo: ChackOut },
    { id: 7, path: '/allrating', Compo: AllRevew }
]
export default PublicRoute