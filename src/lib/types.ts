// src/lib/types.ts

export interface Product {
  id: string;           
  uuid: string;
  productId: string;
  name: string;
  description: string;
  price: number;
  createDate: string;
  scanCount: number;
}

export interface ApiError {
  error: string;
}

//user : 
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  password?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: Omit<User, 'password'>; // Exclude password to frontend.
}
export type AdminNavbarProps = {
  onToggleSidebar?: () => void;
};