import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
            İletişime Geçin
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
            Yolculuğunuza <span className="text-luxury text-brand-red lowercase italic font-normal">Başlayın</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            İster belirli bir aracı satın almak isteyin, ister koleksiyonunuz hakkında uzman tavsiyesine ihtiyacınız olsun, ekibimiz size özel destek sağlamak için burada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-brand-gray p-8 md:p-12 border border-white/5"
          >
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-8">Mesaj Gönderin</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Ad Soyad</label>
                  <input 
                    type="text" 
                    className="w-full bg-brand-black border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="Ad Soyad"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">E-posta Adresi</label>
                  <input 
                    type="email" 
                    className="w-full bg-brand-black border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="e-posta@ornek.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Konu</label>
                <select className="w-full bg-brand-black border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors appearance-none">
                  <option>Araç Sorgulama</option>
                  <option>Hizmet Talebi</option>
                  <option>Aracınızı Satın</option>
                  <option>Diğer</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Mesaj</label>
                <textarea 
                  rows={5}
                  className="w-full bg-brand-black border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"
                  placeholder="Size nasıl yardımcı olabiliriz?"
                />
              </div>
              <button className="w-full bg-brand-red text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-black transition-all flex items-center justify-center gap-2">
                Teklif İste <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-red">
                  <MapPin className="w-5 h-5" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white">Konum</h4>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-red">
                  <Phone className="w-5 h-5" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white">Telefon</h4>
                </div>
                <p className="text-white/50 text-sm">{COMPANY_INFO.phone}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-red">
                  <Mail className="w-5 h-5" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white">E-posta</h4>
                </div>
                <p className="text-white/50 text-sm">{COMPANY_INFO.email}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-red">
                  <Clock className="w-5 h-5" />
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white">Çalışma Saatleri</h4>
                </div>
                <p className="text-white/50 text-sm">{COMPANY_INFO.hours}</p>
              </div>
            </div>

            {/* Placeholder for Map */}
            <div className="aspect-video bg-brand-gray border border-white/5 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-50 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-brand-black/80 backdrop-blur-md border border-white/10 p-6 text-center">
                  <MapPin className="w-8 h-8 text-brand-red mx-auto mb-4" />
                  <p className="text-xs uppercase tracking-widest font-bold">Gölbaşı, Ankara</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] text-brand-red uppercase tracking-widest mt-2 block hover:underline"
                  >
                    Google Haritalar'da Aç
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
