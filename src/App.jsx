import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import SignIn from './Pages/signin';
import SignUp from './Pages/signup';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;