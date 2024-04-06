import logo from './logo.svg';
import './App.css';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form/Form';
import React, { createContext, useState } from 'react';

function App() {
  const [userId, setUser] = useState();
  const setUserId = (id) => {
    setUser(id);
  };
  const UserContext = createContext();
  return (
    <UserContext.Provider value={userId}>
    <div className="App" data-theme="dark">
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/' element={<Signin setUserId={(id)=> setUserId(id)}/>} />
          <Route path='/form' element={<Form/>} />
        </Routes>
     </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
