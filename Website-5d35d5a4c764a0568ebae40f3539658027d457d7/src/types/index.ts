export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  sizes: ProductSize[];
}

export interface ProductSize {
  id: string;
  name: string;
  weight: string;
  price: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FormState {
  name: string;
  email: string;
  phone: string;
  address: string;
  selectedProduct: string;
  selectedSize: string;
  quantity: number;
  message: string;
}