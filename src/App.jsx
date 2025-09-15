import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddTrip from './pages/AddTrip';
import EditTrip from './pages/EditTrip';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddTrip />} />
          <Route path="/edit/:id" element={<EditTrip />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
