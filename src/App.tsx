import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Studio16Page from './pages/Studio16Page';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white cursor-none">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio16" element={<Studio16Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
