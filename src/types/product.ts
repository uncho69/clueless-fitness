export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  sizes: ProductSize[];
  colors: ProductColor[];
  category: string;
  gelatoProductId?: string;
  inStock: boolean;
  featured: boolean;
}

export interface ProductSize {
  id: string;
  name: string;
  code: string;
  inStock: boolean;
}

export interface ProductColor {
  id: string;
  name: string;
  hex: string;
  inStock: boolean;
}

export interface CartItem {
  productId: string;
  product: Product;
  size: ProductSize;
  color: ProductColor;
  quantity: number;
}

export interface GelatoOrder {
  orderReferenceId: string;
  orderItems: GelatoOrderItem[];
  shippingAddress: ShippingAddress;
  customerInfo: CustomerInfo;
}

export interface GelatoOrderItem {
  productId: string;
  productCode: string;
  quantity: number;
  files: GelatoFile[];
}

export interface GelatoFile {
  url: string;
  type: 'front' | 'back' | 'mockup';
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface CustomerInfo {
  email: string;
  phone?: string;
} 