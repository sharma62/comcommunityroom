import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './componenets/Body';
import Footer from './componenets/Footer';
import Nav from './componenets/Nav';
import NavEvents from './componenets/NavEvents';
import Greeing from './componenets/Greeting';
import {CommonError,ComingSoon} from './componenets/CommonError';

function App() {
  const appName = 'comCommunityRoom.org'
  return (
    <>
      <Router>
        {/* nav */}
        <Nav />
        <Routes>

          <Route path='/' element={<Body app_name={appName} />} />
          <Route path='/event' element={<NavEvents />} />
          <Route path='/project' element={<Greeing />} />
          <Route path={`*`} element={<ComingSoon/>} />
        </Routes>
        <Footer app_name={appName}/>

      </Router>
    </>
  );
}




export default App;

