// src/lib/types.ts

export interface Product {
  id: string;           
  uuid: string;
  productId: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  scanCount: number;
}

export interface ApiError {
  error: string;
}