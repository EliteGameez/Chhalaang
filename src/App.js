import logo from './logo.svg';
import './App.css';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form/Form';
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" data-theme="dark">
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
