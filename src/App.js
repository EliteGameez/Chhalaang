import logo from './logo.svg';
import './App.css';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form/Form';

function App() {
  return (
    <div className="App" data-theme="dark">
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/' element={<Signin/>} />
          <Route path='/form' element={<Form/>} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
