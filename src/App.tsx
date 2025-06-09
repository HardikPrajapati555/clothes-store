// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Page from './pages/Page';
import Loading from './pages/Loading';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/page" />} />
        <Route path="/page" element={<Page />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  );
};

export default App;
