import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Profile from './Pages/Profile/Profile';
import Authentication from './Pages/Authentication/Authentication';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="App-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/authentication" element={<Authentication />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
