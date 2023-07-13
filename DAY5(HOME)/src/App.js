import logo from './logo.svg';
import './App.css';
import Gmail from './Components/gmail';
import Login from './Components/login';
import Signup from './Components/signup';
import Nav from './Components/home';
import About from './Components/about';
import Hire from './Components/hire';
import Contact from './Components/contact';

import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav/>}/>
        <Route path="/gmail" element={<Gmail/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Nav/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/hire" element={<Hire/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
