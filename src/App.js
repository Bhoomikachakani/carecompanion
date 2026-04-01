import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Diet from './pages/Diet';
import Tablets from './pages/Tablets';
import Activities from './pages/Activities';
import AIChat from './pages/AIChat';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: "'Georgia', serif", background: '#f5f0eb', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/chat" element={<AIChat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
