import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Catalogo from './Catalogo';
import Info from './info';


const Routing = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Catalogo" element={<Catalogo/>}/>
          <Route path="/info" element={<Info />} />
          <Route path="/" element={<Navigate to="/Home" />}/>
        </Routes>
      </div>
    </Router>
  );
};
export default Routing
  
