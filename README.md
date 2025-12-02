# **Product Verify**

A modern, secure, and user-friendly product verification system built with **Next.js**.  
This application bridges the gap between physical goods and digital trust, allowing users to verify product authenticity instantly while providing shop owners with a powerful dashboard for inventory management.

---

##  **Screenshots**
- Landing Page  
- Login Page  
- Admin Dashboard  
- Verification Success  

---

## **Features**

###  **Public Interface**
- **Landing Page**
  - Hero section with animated typing effects  
  - Glassmorphism UI  
  - Clear value proposition  

- **Verification System**
  - Instant QR code scanning  
  - Real-time validation against a secure database  
  - Visual feedback (Green/Red status cards) for authentic vs. fake products  

- **About Us**
  - Detailed team section  
  - "Who We Are" narrative with animations  
  - Contact form with glassmorphism styling  

- **Responsive Design**
  - Fully optimized for mobile, tablet, and desktop  

- **Dark Mode**
  - Automatic system detection + manual toggle  

---

###  **Admin Dashboard**
- **Secure Login**
  - Protected route with JWT-like cookie authentication  

- **Product Management**
  - **List View**: Searchable, paginated table  
  - **Create Product**: Add new inventory items  
  - **Edit Product**: Update price, name, or details  
  - **Delete Product**: Remove obsolete items  

- **Analytics**
  - Track scan counts (how many times a product was verified)

---

## **Tech Stack**
- **Framework:** Next.js 14 (App Router)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS + Custom CSS Animations  
- **Icons:** Lucide React  
- **Backend / Data:** MockAPI.io (Simulated REST API)  
- **Deployment:** Vercel  + CloudFlare

---

## 🔗 **API Endpoints**

###  **Products**
| Method | Endpoint                    | Description                           |
|--------|-----------------------------|---------------------------------------|
| GET    | `/api/v1/product`           | Fetch all products                    |
| GET    | `/api/v1/product/:id`       | Fetch single product details          |
| POST   | `/api/v1/product`           | Create new product                    |
| PUT    | `/api/v1/product/:id`       | Update a product                      |
| DELETE | `/api/v1/product/:id`       | Remove a product                      |

### **Users (Auth)**
| Method | Endpoint                                   | Description                |
|--------|---------------------------------------------|----------------------------|
| GET    | `/api/v1/users`                             | Fetch users list (Admin)   |
| GET    | `/api/v1/users?email={email}`               | Filter user by email       |

---
 **Getting Started**

Follow these steps to run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/rotanaeav/ISTAD-WEB-DEV-I
   cd product-verify
Install dependencies

bash
```
npm install
# or
yarn install
Configure Environment
Create .env.local:

NEXT_PUBLIC_API_URL=https://68ae84b2b91dfcdd62b9604a.mockapi.io/api/v1

Run the development server

bash
npm run dev

Open in browser
Visit: http://localhost:3000
```

### **Project Structure**
```

src/
├── app/
│   ├── (public)/        # Public pages (Home, Login, About)
│   ├── (admin)/         # Protected Admin pages (Dashboard)
│   ├── api/             # Next.js API Routes (Proxy for Auth)
│   └── layout.tsx       # Root Layout with ThemeProvider
├── components/
│   ├── admin/           # Admin-specific UI (Sidebar, Navbar, Tables)
│   ├── ui/              # Reusable UI (Buttons, Cards, Typewriter)
│   ├── providers/       # Theme Context Providers
│   └── Navbar.tsx       # Public Navigation
├── lib/                 # Utility functions and Types
└── styles/              # Global CSS
```
## **Endpoint**
```

Landing Page: https://istad-web-dev-i.vercel.app/

Login Page: https://istad-web-dev-i.vercel.app/login

Admin Dashboard: https://istad-web-dev-i.vercel.app/dashboard/products

Other : /api/verify/...

```
## **Contributors**

EAV ROTANA – Project Leader / Backend / Support

KEO MENGLONG – Product Features

PHAN MONIKA – Verifier Page Ui

PRUM SAKKDA – Login Ui

NORNG SOCHEATRA – Edit Product Ui

MOT NA – UI Assistant

PRAK SOVANTHONG – Team Member

## License
This project is licensed under the MIT License — see the LICENSE file for details.
