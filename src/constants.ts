import { Car, Service } from './types';

// Direct logo imports for maximum reliability
import lamboLogo from './assets/logos/lamborghinip.png';
import porscheLogo from './assets/logos/porche.png';
import bentleyLogo from './assets/logos/bently.png';
import rollsLogo from './assets/logos/roys.png';
import astonLogo from './assets/logos/aston.png';

// Car Gallery Imports
import porch1 from './assets/cars/porch.png';
import porch2 from './assets/cars/porch2.png';
import porch3 from './assets/cars/porch3.png';
import porch4 from './assets/cars/porch4.png';
import bmw1 from './assets/cars/bmw.png';
import bmw2 from './assets/cars/bmw2.png';
import bmw3 from './assets/cars/bmw3.png';
import bmw5 from './assets/cars/bmw5.png';
import maza1 from './assets/cars/maza.png';
import maza2 from './assets/cars/maza2.png';
import maza3 from './assets/cars/maza3.png';
import gmc1 from './assets/cars/ford1.png';
import gmc2 from './assets/cars/ford2.png';
import gmc3 from './assets/cars/fond3.png';





export const CARS: Car[] = [
  {
    id: '1',
    brand: 'Ferrari',
    model: 'SF90 Stradale',
    year: 2024,
    price: '$524,814',
    engine: '4.0L V8 Plug-in Hybrid',
    power: '986 hp',
    acceleration: '2.5s 0-100 km/h',
    topSpeed: '340 km/h',
    images: [
      'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'SF90 Stradale, içten yanmalı motoru üç elektrikli motorla entegre eden ilk Ferrari PHEV (Plug-in Hibrit Elektrikli Araç) mimarisidir.',
    category: 'Süper Otomobil',
    sahibindenUrl: 'https://www.sahibinden.com/ferrari-sf90-stradale'
  },
  {
    id: '2',
    brand: 'Lamborghini',
    model: 'Revuelto',
    year: 2024,
    price: '$608,358',
    engine: '6.5L V12 Hibrit',
    power: '1,001 hp',
    acceleration: '2.5s 0-100 km/h',
    topSpeed: '350 km/h',
    images: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Revuelto, V12 hibrit güç aktarma organına sahip ilk Yüksek Performanslı Elektrikli Araçtır (HPEV); performans, sportiflik ve sürüş keyfi açısından yeni bir paradigma tanımlıyor.',
    category: 'Süper Otomobil',
    sahibindenUrl: 'https://www.sahibinden.com/lamborghini-revuelto'
  },
  {
    id: '3',
    brand: 'Porsche',
    model: 'Panamera 4S Diesel',
    year: 2025,
    price: '$165,000',
    engine: '4.0L V8 DİZEL',
    power: '422 HP',
    acceleration: '4.3s 0-100 km/h',
    topSpeed: '285 km/h',
    images: [porch1, porch2, porch3, porch4],
    description: 'Panamera 4S Diesel, lüks bir sedanın konforunu gerçek bir spor otomobilin performansıyla birleştiriyor.',
    category: 'Lüks Sedan'
  },
  {
    id: '4',
    brand: 'BMW',
    model: 'i8 Premium Techno',
    year: 2025,
    price: '$148,000',
    engine: '1.5L 3-SİLİNDİR HİBRİT',
    power: '374 HP',
    acceleration: '4.4s 0-100 km/h',
    topSpeed: '250 km/h',
    images: [bmw1, bmw2, bmw3, bmw5],
    description: 'i8, sürdürülebilir mobilite ile yüksek performansı fütüristik bir tasarımda buluşturan bir mühendislik harikasıdır.',
    category: 'Süper Otomobil'
  },
  {
    id: '5',
    brand: 'Maserati',
    model: 'Levante 3.0',
    year: 2025,
    price: '$115,000',
    engine: '3.0L V6 TURBO',
    power: '350 HP',
    acceleration: '6.0s 0-100 km/h',
    topSpeed: '251 km/h',
    images: [maza1, maza2, maza3],
    description: 'Levante, Maserati ruhunu taşıyan, asil ve vahşi bir SUV deneyimi sunuyor.',
    category: 'SUV'
  },
  {
    id: '6',
    brand: 'Tesla',
    model: 'Model S',
    year: 2024,
    price: '$108,000',
    engine: 'Tri-Motor Tüm Tekerleklerden Çekiş',
    power: '1020 HP',
    acceleration: '2.1s 0-100 km/h',
    topSpeed: '322 km/h',
    images: [
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1519205186445-75514912c029?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Model S Plaid, dünyanın en hızlı seri üretim araçlarından biri olarak performans ve teknolojiyi yeniden tanımlıyor.',
    category: 'Elektrikli Sedan'
  },
  {
    id: '7',
    brand: 'GMC',
    model: 'Sierra 3.0 L AT4',
    year: 2026,
    price: '$82,000',
    engine: '3.0L DURAMAX I6 DİZEL',
    power: '305 HP',
    acceleration: '7.5s 0-100 km/h',
    topSpeed: '180 km/h',
    images: [gmc1, gmc2, gmc3],
    description: 'Sierra AT4, lüks iç mekanı ve üstün off-road yetenekleriyle her türlü arazinin hakimidir.',
    category: 'SUV'
  }

];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Lüks Araç Tedariği',
    description: 'Dünya çapındaki en nadir ve en özel araçları, tam spesifikasyonlarınıza göre buluyoruz.',
    icon: 'Search'
  },
  {
    id: '2',
    title: 'Premium Bakım',
    description: 'Yüksek performanslı motorlar ve lüks iç mekanlar için sertifikalı teknisyenler tarafından uzman bakım.',
    icon: 'Wrench'
  },
  {
    id: '3',
    title: 'Global Lojistik',
    description: 'Varlıklarınızın dünyanın her yerine güvenli, sigortalı ve iklim kontrollü taşınması.',
    icon: 'Globe'
  },
  {
    id: '4',
    title: 'Finansal Hizmetler',
    description: 'Yüksek net değerli bireyler ve kurumsal müşteriler için özel finansman ve kiralama çözümleri.',
    icon: 'CreditCard'
  }
];

export const BRAND_LOGOS = [
  { name: 'Ferrari', logo: 'https://www.logo.wine/a/logo/Ferrari/Ferrari-Logo.wine.svg' },
  { name: 'Lamborghini', logo: lamboLogo },
  { name: 'Porsche', logo: porscheLogo },
  { name: 'Rolls-Royce', logo: rollsLogo },
  { name: 'Bentley', logo: bentleyLogo },
  { name: 'Aston Martin', logo: astonLogo },
  { name: 'McLaren', logo: 'https://www.logo.wine/a/logo/McLaren/McLaren-Logo.wine.svg' },
  { name: 'Bugatti', logo: 'https://www.logo.wine/a/logo/Bugatti/Bugatti-Logo.wine.svg' }
];

export const COMPANY_INFO = {
  name: 'FDN Automotive',
  address: 'Şehit Savcı Selim Kiraz Bulvarı, İncek Şht. Savcı Mehmet Selim Kiraz Blv 134/A, 06770 Gölbaşı/Ankara',
  phone: '0505 605 44 44',
  hours: 'Pzt-Cmt: 09:00 - 19:00, Paz: Kapalı',
  email: 'info@fdnautomotive.com'
};
