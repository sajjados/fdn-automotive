import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Zap, Gauge, Wind, ShieldCheck } from 'lucide-react';
import { CARS, BRAND_LOGOS } from '../constants';

// Direct logo imports for maximum reliability in this environment
import lamboLogo from '../assets/logos/lamborghinip.png';
import porscheLogo from '../assets/logos/porche.png';
import bentleyLogo from '../assets/logos/bently.png';
import rollsLogo from '../assets/logos/roys.png';
import astonLogo from '../assets/logos/aston.png';


export default function Home() {
  return (
    <div className="overflow-hidden relative">
      <div className="noise-overlay" />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Car"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-brand-red" />
                  <span className="text-brand-red font-black uppercase tracking-[0.5em] text-[10px]">
                    Seçkin Otomotiv Küratörü
                  </span>
                </div>
                <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] font-black tracking-tighter leading-[0.9] sm:leading-[0.8] mb-12 uppercase italic">
                  Saf <br />
                  <span className="text-luxury text-brand-red lowercase italic font-normal ml-[0.1em] sm:ml-[0.5em]">Duygu</span>
                </h1>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-16">
                  <Link
                    to="/gallery"
                    className="group relative overflow-hidden border border-brand-red text-white px-8 py-4 font-black uppercase tracking-[0.3em] text-[9px] transition-all duration-500 w-full sm:w-auto text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-brand-black transition-colors duration-500">
                      Koleksiyonu Keşfet <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-500" />
                    </span>
                    <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Link>
                  
                  <div className="hidden sm:flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.3em] font-black">Filmi İzle</span>
                  </div>
                </div>
              </motion.div>
            </div>

            
            <div className="hidden lg:block lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                className="relative"
              >
                <div className="text-vertical absolute -left-12 top-0 h-full flex items-center">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-black">Kuruluş 2014 • Ankara</span>
                </div>
                <div className="aspect-[3/4] border border-white/10 p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Logos - Refined Editorial Style */}
      <section className="py-4 lg:py-6 bg-brand-black border-y border-white/5 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-brand-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-brand-black to-transparent z-10" />
        
        <div className="flex gap-40 animate-marquee whitespace-nowrap items-center py-2">
          {[
            { name: 'Lamborghini', logo: lamboLogo },
            { name: 'Porsche', logo: porscheLogo },
            { name: 'Porsche', logo: porscheLogo },
            { name: 'Rolls-Royce', logo: rollsLogo },
            { name: 'Rolls-Royce', logo: rollsLogo },
            { name: 'Bentley', logo: bentleyLogo },
            { name: 'Bentley', logo: bentleyLogo },
            { name: 'Aston Martin', logo: astonLogo },
            { name: 'Aston Martin', logo: astonLogo }
          ].map((brand, i) => (
            <div key={i} className="flex items-center gap-10 group cursor-default">
              <div className="relative">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-8 lg:h-10 w-auto object-contain opacity-100 group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.6em] text-white/60 group-hover:text-white transition-all duration-700 font-bold">{brand.name}</span>
            </div>
          ))}
          {/* Duplicate for infinite loop */}
          {[
            { name: 'Lamborghini', logo: lamboLogo },
            { name: 'Porsche', logo: porscheLogo },
            { name: 'Porsche', logo: porscheLogo },
            { name: 'Rolls-Royce', logo: rollsLogo },
            { name: 'Rolls-Royce', logo: rollsLogo },
            { name: 'Bentley', logo: bentleyLogo },
            { name: 'Bentley', logo: bentleyLogo },
            { name: 'Aston Martin', logo: astonLogo },
            { name: 'Aston Martin', logo: astonLogo }
          ].map((brand, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-10 group cursor-default">
              <div className="relative">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-8 lg:h-10 w-auto object-contain opacity-100 group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.6em] text-white/60 group-hover:text-white transition-all duration-700 font-bold">{brand.name}</span>
            </div>
          ))}
        </div>



      </section>

      {/* Featured Bento Grid */}
      <section className="py-40 px-6 md:px-12 bg-brand-black">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
            <div className="lg:col-span-5">
              <span className="text-brand-red font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">
                Küratör Listesi
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] sm:leading-none mb-8 break-words">
                Hareket Halindeki <br />
                <span className="text-luxury text-brand-red lowercase italic font-normal">Başyapıtlar</span>
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-white/40 text-xl font-light leading-relaxed max-w-xl">
                Seçim sürecimiz titizdir. Sadece kusursuz geçmişe, olağanüstü özelliklere ve ruhu harekete geçirme gücüne sahip araçları bünyemize katıyoruz.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {CARS.filter(car => ['7', '4', '3'].includes(car.id)).map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative aspect-[4/5] overflow-hidden bg-brand-gray"
              >
                <img
                  src={car.images[0]}
                  alt={car.model}
                  className="w-full h-full object-cover transition-transform duration-1000 lg:group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end translate-y-0 lg:translate-y-10 lg:group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-brand-red font-black text-[10px] uppercase tracking-[0.4em] opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                      {car.category}
                    </span>
                  </div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter mb-2 z-10 relative">
                    {car.brand} <br />
                    <span className="text-luxury italic font-normal lowercase">{car.model}</span>
                  </h3>
                  <div className="flex items-center gap-6 mt-6 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 lg:delay-100 z-10 relative">
                    <div className="flex flex-col">
                      <span className="text-[8px] uppercase tracking-widest text-white/40">Güç</span>
                      <span className="text-xs font-bold">{car.power}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[8px] uppercase tracking-widest text-white/40">0-100</span>
                      <span className="text-xs font-bold">{car.acceleration}</span>
                    </div>
                  </div>
                </div>
                <Link to="/gallery" className="absolute inset-0 z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-40 bg-white text-brand-black">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <motion.div 
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="aspect-[4/5] overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-red p-8 flex flex-col justify-between hidden md:flex">
                <span className="text-white font-black text-6xl tracking-tighter italic leading-none">10</span>
                <span className="text-white text-[10px] uppercase tracking-[0.4em] font-black leading-tight">Yıllık <br />Rakipsiz <br />Hizmet</span>
              </div>
            </div>
            
            <div>
              <span className="text-brand-red font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">
                Showroom
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] sm:leading-[0.85] mb-12 break-words">
                Hayallerin <br />
                <span className="text-luxury text-brand-red lowercase italic font-normal">Ev Bulduğu Yer</span>
              </h2>
              <p className="text-brand-black/60 text-xl font-light leading-relaxed mb-12">
                Ankara showroomumuz bir galeriden daha fazlasıdır; otomotiv sanatı için bir sığınaktır. Dünyanın en iyi mühendisliğini mutlak konfor içinde deneyimleyebileceğiniz özel, yüksek güvenlikli bir ortam sunuyoruz.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 text-brand-black font-black uppercase tracking-[0.3em] text-xs group"
              >
                Özel Randevu Oluşturun <div className="w-12 h-px bg-brand-black group-hover:w-20 transition-all duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
