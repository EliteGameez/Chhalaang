import logo from './logo.svg';
import './App.css';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form/Form';
import React, { createContext, useEffect, useState } from 'react';
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './components/UserProfile/UserProfile';
import Error from './common/Error';
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import UserContext from './lib/UserProvider';

function App() {
  const [userId, setUser] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();


  const setUserId = (id) => {
    setUser(id);
  };
  const setLatitude = (lat) => {
setLat(lat)
  };
  const setLongitude = (long) => {
    setLong(long)
      };

  return (
    <UserContext.Provider value={{userId: userId, long: long, lat:lat}}>
      <NavBar></NavBar>
      <div className="App" data-theme="dark">
        <Router>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin setUserId={(id) => setUserId(id)} setLatitude={(lat)=>setLatitude(lat) } setLongitude={(lat)=>setLongitude(lat)}/>} />
            <Route path='/form' element={<Form />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/error' element={<Error />} />
            <Route path="/userProfile" element={<UserProfile />} />
          </Routes>
        </Router>
      </div>
      <br />
      <br />
      <br />
      <Footer></Footer>
    </UserContext.Provider>
  );
}

export default App;
