import './App.css';
import './components/Navbar/Navbar.js';
import Navbar from './components/Navbar/Navbar.js';
import { Access } from './pages/Auth/Access';
import { Login } from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import { Dashboard } from './pages/Dashboard/Dashboard.js';
import { Maintenance } from './pages/Maintenance/Maintenance.js';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Route, Routes} from  'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthentication = () => {
    // Check if the user is stored in sessionStorage
    const user = sessionStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  // Run the checkAuthentication function when the component mounts
  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <Routes>
            <Route path='/' element={
                <>
                  <Home />
                </>
              }>
              </Route>
              <Route path='/access' element={
                <>
                  <Access />
                </>
              }>
              </Route>
              <Route path='/login' element={
                <>
                  <Login />
                </>
              }>
              </Route>
              <Route path='/signup' element={
                <>
                  <Signup />
                </>
              }>
              </Route>
              <Route path='/dashboard' element={
                <>
                  <Dashboard />
                </>
              }>
              </Route>
            </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
