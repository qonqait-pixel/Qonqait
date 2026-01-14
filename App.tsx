
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Blog from './pages/Blog';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-orange-brand selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<div className="pt-40 text-center h-screen"><h1 className="text-4xl font-bold">Our Solutions</h1><p className="mt-4 text-gray-500 max-w-lg mx-auto">From AI Strategy to ERP Modernization, we provide the architecture for the modern autonomous enterprise.</p></div>} />
          <Route path="/about" element={<div className="pt-40 text-center h-screen"><h1 className="text-4xl font-bold">About QONQAIT</h1><p className="mt-4 text-gray-400 max-w-xl mx-auto">Founded on 10+ years of infrastructure excellence. 100% Black Female Owned, focusing on African digital empowerment and bridging legacy systems with AI.</p></div>} />
          <Route path="/legal" element={<div className="pt-40 text-center h-screen"><h1 className="text-4xl font-bold">Legal & POPIA</h1><p className="mt-4 text-gray-500">Protecting your data and ensuring compliance across all transformation projects.</p></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
