import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'C:/Users/Krishan/Desktop/ITP/Project/frontend/src/componets/Header'; 
import Additem from 'C:/Users/Krishan/Desktop/ITP/Project/frontend/src/componets/Additem';
import Home from './componets/home';
import Allitems from './componets/Allitem';


function App() {
  return (
    <Router>
      <Header /> {/* Place Header outside of Routes */}
      
      <Routes>
      <Route path="/allitem" element={<Allitems />} />
      <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Additem />} />
        
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
