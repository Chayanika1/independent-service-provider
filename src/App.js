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
      </Routes>

      </div>
     

    </div>
  );
}

export default App;
