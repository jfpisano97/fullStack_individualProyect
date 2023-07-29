import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css'

// views import
import Landing from './views/landing/landing.jsx';
import HomePage from './views/homePage/homePage.jsx';
import DetailPage from './views/detailPage/detailPage.jsx';
import FormPage from './views/formPage/formPage.jsx';

// components import
import NavBar from './components/navBar/navBar.jsx';

function App() {

  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <NavBar />}
         <Routes>

          <Route path='/' element={<Landing />} />

          <Route path='/home' element={<HomePage />} />   

          <Route path='/countries/:id' element={<DetailPage />} />
          
          <Route path='/form' element={<FormPage />} />

         </Routes>
    </>
  )
};

export default App;
