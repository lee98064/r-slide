
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import PresentationList from './components/PresentationList';
import PresentationViewer from './components/PresentationViewer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<PresentationList />} />
          <Route path="/ppt/:id" element={<PresentationViewer />} />
        </Routes>
      </main>
    </HashRouter>
  );
};

export default App;
