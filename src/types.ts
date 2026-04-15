export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  engine: string;
  power: string;
  acceleration: string;
  topSpeed: string;
  images: string[];
  description: string;
  category: 'Süper Otomobil' | 'Lüks Sedan' | 'SUV' | 'Klasik';
  sahibindenUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
