import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Car, Instagram } from 'lucide-react';
import { cn } from '../lib/utils';
import fdnLogo from '../assets/logos/fdn logo.png';

const NAV_LINKS = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Galeri', path: '/gallery' },
  { name: 'Hizmetler', path: '/services' },
  { name: 'İletişim', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-12',
        scrolled ? 'py-4 bg-brand-black/80 backdrop-blur-2xl border-b border-white/5' : 'py-8 bg-transparent'
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center z-[60] group">
          <img 
            src={fdnLogo} 
            alt="FDN Automotive" 
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-700 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 relative group',
                location.pathname === link.path ? 'text-brand-red' : 'text-white/50 hover:text-white'
              )}
            >
              {link.name}
              <span className={cn(
                'absolute -bottom-2 left-0 w-0 h-px bg-brand-red transition-all duration-300 group-hover:w-full',
                location.pathname === link.path && 'w-full'
              )} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6 z-[60]">
          <Link
            to="/contact"
            className="hidden md:block text-[10px] uppercase tracking-[0.3em] font-black border border-white/20 px-8 py-3 hover:bg-white hover:text-brand-black transition-all duration-500"
          >
            Teklif Al
          </Link>
          
          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 hover:text-brand-red transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Page Minimal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-black z-50 md:hidden flex flex-col pt-32 px-12"
          >
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-4xl uppercase tracking-tighter font-black transition-all duration-500 block',
                      location.pathname === link.path ? 'text-brand-red' : 'text-white/40 hover:text-white'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-20 flex flex-col gap-12"
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-brand-red text-white px-8 py-5 text-center text-[10px] uppercase tracking-[0.4em] font-black hover:bg-white hover:text-brand-black transition-all duration-500"
              >
                Bize Ulaşın
              </Link>

              <div className="flex items-center justify-between border-t border-white/10 pt-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] uppercase tracking-[0.5em] text-white/20 font-black">Sosyal Medya</span>
                  <a 
                    href="https://www.instagram.com/fdnautomotivetr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 hover:text-brand-red transition-colors duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-black">Instagram</span>
                  </a>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <span className="text-[8px] uppercase tracking-[0.5em] text-white/20 font-black">Konum</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/60">Ankara, TR</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
