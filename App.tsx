import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-neutral-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-500/30">
        <Router>
          <ScrollToTop />
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
          <main className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <footer className="py-8 border-t border-neutral-200 dark:border-zinc-800 text-center text-sm text-zinc-500 dark:text-zinc-400">
            <p>© {new Date().getFullYear()} Khadiza Houqe. All rights reserved.</p>
          </footer>
        </Router>
      </div>
    </div>
  );
};

export default App;
