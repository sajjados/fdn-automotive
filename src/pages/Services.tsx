import { motion } from 'motion/react';
import { Search, Wrench, Globe, CreditCard, ShieldCheck, Award } from 'lucide-react';
import { SERVICES } from '../constants';

const ICON_MAP: Record<string, any> = {
  Search,
  Wrench,
  Globe,
  CreditCard
};

export default function Services() {
  return (
    <div className="pt-32 pb-20 bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Uzmanlığımız
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
            Premium <span className="text-luxury text-brand-red lowercase italic font-normal">Otomotiv</span> Hizmetleri
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            FDN Automotive olarak, en seçici araç sahipleri için tasarlanmış kapsamlı bir hizmet paketi sunuyoruz. 
            Küresel tedarikten titiz bakıma kadar ekibimiz, otomotiv varlıklarınızın mutlak hassasiyetle yönetilmesini sağlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-brand-black p-12 md:p-16 hover:bg-brand-gray transition-colors group"
              >
                <div className="w-16 h-16 bg-brand-red/10 flex items-center justify-center mb-8 group-hover:bg-brand-red transition-colors">
                  <Icon className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{service.title}</h3>
                <p className="text-white/50 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-brand-red text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Daha Fazla Bilgi <Award className="w-3 h-3" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="w-12 h-12 text-brand-red mb-6" />
            <h4 className="text-lg font-bold uppercase tracking-widest mb-4">Sertifikalı Kalite</h4>
            <p className="text-white/40 text-sm">Koleksiyonumuzdaki her araç, usta teknisyenler tarafından 150 noktalı titiz bir incelemeden geçer.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Globe className="w-12 h-12 text-brand-red mb-6" />
            <h4 className="text-lg font-bold uppercase tracking-widest mb-4">Dünya Çapında Teslimat</h4>
            <p className="text-white/40 text-sm">Uluslararası nakliye için tüm gümrük ve lojistik süreçlerini yöneterek sorunsuz bir teslimat sağlıyoruz.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="w-12 h-12 text-brand-red mb-6" />
            <h4 className="text-lg font-bold uppercase tracking-widest mb-4">Özel Erişim</h4>
            <p className="text-white/40 text-sm">Ağımız, piyasa dışı araçlara ve sınırlı üretim sürümlere halka açılmadan önce erişim sağlar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
