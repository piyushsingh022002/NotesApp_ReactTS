import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Landing from './components/Landing';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          localStorage.getItem('token')
            ? <Dashboard />
            : <Navigate to="/login" replace />
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
