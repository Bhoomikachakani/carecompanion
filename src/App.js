import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Diet from './pages/Diet';
import Tablets from './pages/Tablets';
import Activities from './pages/Activities';
import AIChat from './pages/AIChat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/chat" element={<AIChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
