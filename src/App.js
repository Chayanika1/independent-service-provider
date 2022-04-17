import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import CheckOut from './Components/CheckOut/CheckOut';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Footer from './Components/Footer/Footer';
import Error from './Components/Error/Error';
import Reviews from './Components/Reviews/Reviews';
import Vlogs from './Components/Vlogs/Vlogs';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/CheckOut" element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
        <Route path="/Registration" element={<Registration></Registration>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/Vlogs" element={<Vlogs></Vlogs>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>

      </div>
     

    </div>
  );
}

export default App;
