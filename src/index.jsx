import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ExploreEmotions from './components/ExploreEmotions';
import ContributeEmotions from './components/ContributeEmotions';
import SearchFilters from './components/SearchFilters';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Register from './components/Register';
import AdminPanel from './components/AdminPanel';
import FAQ from './components/FAQ';
import Start from './components/Start';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/explore" element={<ExploreEmotions />} />
        <Route path="/contribute" element={<ContributeEmotions />} />
        <Route path="/search" element={<SearchFilters />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
