import logo from './logo.svg';
import './App.css';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form/Form';
import React, { createContext, useState } from 'react';
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './components/UserProfile/UserProfile';

import NavBar from './common/NavBar';
import Footer from './common/Footer';
function App() {
  const [userId, setUser] = useState();
  const setUserId = (id) => {
    setUser(id);
  };
  const UserContext = createContext();
  return (
    <UserContext.Provider value={userId}>
      <NavBar></NavBar>
      <div className="App" data-theme="dark">
        <Router>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin setUserId={(id) => setUserId(id)} />} />
            <Route path='/form' element={<Form />} />
            <Route path='/' element={<Home />} />
            <Route path="/userProfile" element = {<UserProfile/>}/>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </UserContext.Provider>
  );
}

export default App;
