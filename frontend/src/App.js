
import './App.css';
import Navbar from './Component/Navbar';
import Add from './Component/Add';
import Update from './Component/Update';
import Logout from './Component/Logout';
import Profile from './Component/Profile';
import Signup from './Component/Signup';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Login from './Component/Login';

import {BrowserRouter , Routes , Route } from 'react-router-dom'
import PrivateComp from './PrivateComp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>

          <Route element={<PrivateComp /> }>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
          </Route >
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        
       </Routes>
      </BrowserRouter>
 
<Footer/>
    </div>
  );
}

export default App;
