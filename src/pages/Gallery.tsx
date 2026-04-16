import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info, Gauge, Zap, Wind, ArrowRight } from 'lucide-react';
import { CARS, BRAND_LOGOS } from '../constants';
import { Car } from '../types';
import { cn } from '../lib/utils';

export default function Gallery() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filter, setFilter] = useState<string>('Hepsi');

  const categories = ['Hepsi', ...Array.from(new Set(CARS.map(c => c.category)))];
  const filteredCars = filter === 'Hepsi' ? CARS : CARS.filter(c => c.category === filter);

  return (
    <div className="pt-40 pb-20 px-6 md:px-12 min-h-screen bg-brand-black relative">
      <div className="noise-overlay" />
      
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-12">
          <div className="max-w-2xl">
            <span className="text-brand-red font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">
              Kasa
            </span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
              Mevcut <br />
              <span className="text-luxury text-brand-red lowercase italic font-normal">Stok</span>
            </h1>
          </div>
          
          <div className="flex flex-col gap-6 w-full lg:w-auto">
            <span className="text-[8px] uppercase tracking-[0.5em] text-white/20 font-black lg:text-right">Kategoriye Göre Filtrele</span>
            <div className="flex overflow-x-auto lg:overflow-visible lg:flex-wrap lg:justify-end gap-4 lg:gap-x-8 lg:gap-y-4 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="group relative flex items-center gap-3 cursor-pointer whitespace-nowrap shrink-0 pb-2 lg:pb-0"
                >
                  <span className={cn(
                    "text-[9px] font-black transition-colors duration-500",
                    filter === cat ? "text-brand-red" : "text-white/10 group-hover:text-white/40"
                  )}>
                    0{i + 1}
                  </span>
                  <span className={cn(
                    "text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-500",
                    filter === cat ? "text-white" : "text-white/30 group-hover:text-white"
                  )}>
                    {cat}
                  </span>
                  {filter === cat && (
                    <motion.div 
                      layoutId="activeFilter"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red lg:-bottom-2"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Marquee for Gallery - Refined Editorial Style */}
        <div className="mb-12 py-4 lg:py-6 border-y border-white/5 overflow-hidden relative group">
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-brand-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-brand-black to-transparent z-10" />
          
          <div className="flex gap-40 animate-marquee whitespace-nowrap items-center">
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, i) => (
              <div key={i} className="flex items-center gap-10 group cursor-default">
                <div className="relative">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-7 lg:h-9 w-auto object-contain opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[9px] uppercase tracking-[0.8em] text-white/60 group-hover:text-white transition-all duration-1000 font-black">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              layoutId={`car-${car.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCar(car)}
              className="group cursor-pointer bg-brand-black p-8 md:p-12 hover:bg-brand-gray transition-colors duration-700"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-12">
                <img
                  src={car.images[0]}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-brand-red font-black text-[8px] uppercase tracking-[0.4em] mb-2 block">
                    {car.year} • {car.category}
                  </span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-brand-red transition-colors duration-500">
                    {car.brand} <br />
                    <span className="text-luxury italic font-normal lowercase">{car.model}</span>
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail View */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-12"
          >
            <div 
              className="absolute inset-0 bg-brand-black/98 backdrop-blur-3xl" 
              onClick={() => setSelectedCar(null)}
            />
            
            <motion.div
              layoutId={`car-${selectedCar.id}`}
              className="relative w-full max-w-7xl h-auto max-h-[90vh] bg-brand-black border-subtle overflow-y-auto flex flex-col lg:flex-row scrollbar-hide"
            >
              <button
                onClick={() => setSelectedCar(null)}
                className="fixed lg:absolute top-6 right-6 lg:top-12 lg:right-12 z-[70] w-12 h-12 lg:w-16 lg:h-16 border border-white/10 bg-brand-black/80 backdrop-blur-md hover:bg-brand-red hover:border-brand-red flex items-center justify-center transition-all duration-500"
              >
                <X className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>

              {/* Image Side */}
              <div className="w-full lg:w-3/5 bg-brand-gray relative group">
                <div className="flex flex-col w-full">
                  {selectedCar.images.map((img, i) => (
                    <div key={i} className="w-full relative aspect-[16/10] lg:aspect-auto">
                      <img
                        src={img}
                        alt={`${selectedCar.model} view ${i + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-40" />
                    </div>
                  ))}
                </div>
                
                <div className="absolute bottom-12 left-12 flex flex-col gap-4 hidden lg:flex">
                  <span className="text-[8px] uppercase tracking-[0.5em] font-black text-white/40">Keşfetmek için Kaydır</span>
                  <div className="w-px h-20 bg-gradient-to-b from-brand-red to-transparent" />
                </div>
              </div>

              {/* Info Side */}
              <div className="w-full lg:w-2/5 p-8 md:p-16 lg:p-20 flex flex-col bg-brand-black">
                <div className="mb-12 lg:mb-16">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-px bg-brand-red" />
                    <span className="text-brand-red font-black uppercase tracking-[0.5em] text-[10px]">
                      Teknik Özellikler • {selectedCar.category}
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8 break-words">
                    {selectedCar.brand} <br />
                    <span className="text-luxury text-brand-red lowercase italic font-normal">{selectedCar.model}</span>
                  </h2>
                  <div className="flex items-center gap-8">
                    <span className="text-white/40 text-sm lg:text-base font-black tracking-[0.2em] uppercase">Üretim Yılı: {selectedCar.year}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-12 gap-x-8 mb-20">
                  {[
                    { label: 'Güç', value: selectedCar.power, icon: Zap },
                    { label: '0-100 km/s', value: selectedCar.acceleration, icon: Gauge },
                    { label: 'Maksimum Hız', value: selectedCar.topSpeed, icon: Wind },
                    { label: 'Motor', value: selectedCar.engine, icon: Info },
                  ].map((spec, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-2 text-white/30 text-[8px] uppercase tracking-[0.3em] font-black">
                        <spec.icon className="w-3 h-3 text-brand-red" /> {spec.label}
                      </div>
                      <p className="text-lg font-bold uppercase tracking-tight">{spec.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-20">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-black mb-6 text-white/40">Hikaye</h4>
                  <p className="text-white/50 text-lg font-light leading-relaxed italic">
                    "{selectedCar.description}"
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <button className="w-full bg-brand-red text-white py-4 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-brand-black transition-all duration-500">
                    Dosya Talep Et
                  </button>
                  {selectedCar.sahibindenUrl && (
                    <a 
                      href={selectedCar.sahibindenUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border border-white/10 text-white py-4 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white/5 transition-all duration-500 flex items-center justify-center gap-2"
                    >
                      Sahibinden'de İncele <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
