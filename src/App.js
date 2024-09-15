import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
/* Router*/
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';




function App() {
  return ( 
    <BrowserRouter>
  <div className="App">
      
  <Header />

  <Routes>
    <Route path='/Home' element={<Home />} />
    <Route path='/about-us' element={<About />} />
    <Route path='/contact-us' element={<Contact />} />
  </Routes>
  <Footer /> 
  </div>
  </BrowserRouter>

  );
}


export default App;
