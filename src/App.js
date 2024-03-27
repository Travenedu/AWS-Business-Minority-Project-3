import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Profile from './Pages/Profile/Profile';
import Authentication from './Pages/Authentication/Authentication';
import { CompanyXPage } from './Pages/Entrepreneur/Entrepreneur';
import { LeaveAReview } from './Pages/LeaveAReview/LeaveAReview';
import { MarketingPage } from './Pages/MarketingPage';
import BusinessView from './Pages/BusinessView/BusinessView';
import CreateBusiness from './Pages/CreateBusiness/CreateBusiness';
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
            <Route path="/entrepreneur" element={<CompanyXPage />} />
            <Route path="/LeaveAReview" element={<LeaveAReview/>}/>
            <Route path="/marketingpage" element={<MarketingPage/>}/>
            <Route path="/businessview" element={<BusinessView/>}/>
            <Route path="/createbusiness" element={<CreateBusiness/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
