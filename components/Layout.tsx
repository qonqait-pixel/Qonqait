
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Linkedin, Twitter, Globe, Phone, Mail } from 'lucide-react';
import { BRAND } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Insights', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  if (location.pathname.startsWith('/admin')) return null;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-sora tracking-tighter flex items-center gap-2">
          <span className="text-orange-brand text-3xl font-black">Q</span>ONQAIT
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-medium hover:text-orange-brand transition-colors ${location.pathname === link.path ? 'text-orange-brand' : 'text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-orange-brand hover:bg-white hover:text-black text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest transition-all">
            Audit Request
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 px-6 py-8 flex flex-col gap-6 slide-down">
          {links.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-lg font-medium text-white">{link.name}</Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link to="/" className="text-3xl font-bold font-sora tracking-tighter mb-6 block">
              <span className="text-orange-brand text-4xl font-black">Q</span>ONQAIT
            </Link>
            <p className="text-gray-400 text-lg max-w-md mb-8">
              Empowering African enterprises through intelligent AI transformation and robust ICT foundations. 100% Black Female Owned. Level 1 B-BBEE.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-orange-brand hover:text-orange-brand transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/services" className="hover:text-orange-brand transition-colors">AI Strategy</Link></li>
              <li><Link to="/services" className="hover:text-orange-brand transition-colors">Intelligent Automation</Link></li>
              <li><Link to="/services" className="hover:text-orange-brand transition-colors">ERP Integration</Link></li>
              <li><Link to="/services" className="hover:text-orange-brand transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3"><Phone size={16} className="text-orange-brand"/> +27 (0) 11 555 0123</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-orange-brand"/> solutions@qonqait.com</li>
              <li className="flex items-center gap-3"><Globe size={16} className="text-orange-brand"/> Sandton, Johannesburg</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2024 QONQAIT (PTY) LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link to="/legal" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/legal" className="hover:text-white transition-colors">POPIA Compliance</Link>
            <Link to="/admin" className="hover:text-white transition-colors border-l border-white/10 pl-8">Admin Access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
