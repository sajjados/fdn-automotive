import { Link } from 'react-router-dom';
import { Car, ArrowRight, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="noise-overlay" />
      
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-24 lg:mb-32">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-10 lg:mb-12">
              <div className="w-10 h-10 bg-brand-red flex items-center justify-center rotate-45">
                <Car className="text-white w-5 h-5 -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter leading-none italic">FDN</span>
                <span className="text-[10px] uppercase tracking-[0.5em] text-brand-red font-black -mt-1">Automotive</span>
              </div>
            </Link>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-8">
              Sıradanlığı Aşan <br />
              <span className="text-luxury text-brand-red lowercase italic font-normal">Küratörlük</span>
            </h3>
            <p className="text-white/30 text-lg font-light leading-relaxed max-w-md mb-10 lg:mb-12">
              Ankara merkezli, dünyanın en önemli araçlarının tedariği ve yönetimine adanmış butik bir otomotiv küratörüyüz.
            </p>
            <div className="flex gap-8">
              <a 
                href="https://www.instagram.com/fdnautomotivetr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-black text-white/40 hover:text-brand-red transition-all duration-300 group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-red mb-8 lg:mb-10">Navigasyon</h4>
              <ul className="space-y-4 lg:space-y-6">
                {[
                  { name: 'Ana Sayfa', path: '/' },
                  { name: 'Galeri', path: '/gallery' },
                  { name: 'Hizmetler', path: '/services' },
                  { name: 'İletişim', path: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-red mb-8 lg:mb-10">İletişim</h4>
              <ul className="space-y-4 lg:space-y-6">
                <li className="text-sm font-bold uppercase tracking-widest text-white/50 leading-relaxed">
                  {COMPANY_INFO.address}
                </li>
                <li className="text-sm font-bold uppercase tracking-widest text-white/50">
                  {COMPANY_INFO.phone}
                </li>
                <li className="text-sm font-bold uppercase tracking-widest text-white/50">
                  {COMPANY_INFO.email}
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-red mb-8 lg:mb-10">Bülten</h4>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="E-posta Adresi" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors"
                />
                <button className="absolute right-0 bottom-4 text-brand-red hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-[8px] uppercase tracking-[0.5em] font-black text-white/20">
            © 2024 FDN Automotive Curator. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-8 lg:gap-12">
            <span className="text-[8px] uppercase tracking-[0.5em] font-black text-white/20 hover:text-white transition-colors cursor-pointer">Gizlilik</span>
            <span className="text-[8px] uppercase tracking-[0.5em] font-black text-white/20 hover:text-white transition-colors cursor-pointer">Şartlar</span>
            <span className="text-[8px] uppercase tracking-[0.5em] font-black text-white/20 hover:text-white transition-colors cursor-pointer">Çerezler</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
