import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import { HomeTemplate } from './templates/HomeTemplate';
import Detail from './pages/Detail/Detail';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Switch>
          <HomeTemplate exact path="/home" Component={Home}/>
          <HomeTemplate exact path="/detail/:id" Component={Detail}/>
          <Route exact path='/booking/:maLichChieu' render={
          (propsRoute) =>{
            return <Booking {...propsRoute}/>
          }
          }/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
          <HomeTemplate exact path="/" Component={Home}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
