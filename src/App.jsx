import { useState } from 'react'

import DashBoard from './Final/DashBoard/DashBoard'; // Ensure correct import path
import './App.css'
import LoginForm from './Final/Login';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
       
        <Route path="/Dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
