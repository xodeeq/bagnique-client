export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  available_quantity: number;
  out_of_stock: false;
  product_images: ProductImage[];
}

export interface ProductImage {
  id: number;
  file: string;
  product: number;
}

export interface OrderProduct {
  product: number;
  quantity: number;
}

export interface CartProduct {
  product: Product;
  quantity: number;
}

export interface Order {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zip_code: string;
  address: string;
  order_products: OrderProduct[];
}
