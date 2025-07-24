# Booking Platform Monorepo

A comprehensive booking platform built with Next.js, Material-UI, and pnpm workspaces.

## 🏗️ **Architecture**

This monorepo contains multiple applications and shared packages:

### **Applications (`apps/`)**
- **`storefront`** - Customer-facing booking interface - Next.js (Port: 8001)
- **`admin`** - Admin dashboard for platform management - React + Vite (Port: 8002)  
- **`owner`** - Business owner dashboard for managing listings - Next.js (Port: 8003)

### **Shared Packages (`shared/`)**
- **`theme`** - Design system and theming utilities
- **`components`** - Reusable UI components
- **`utils`** - Shared utilities and helper functions

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+
- pnpm 8+

### **Installation**
```bash
# Install pnpm globally if you haven't
npm install -g pnpm

# Install all dependencies
pnpm install
```

### **Development**

**Run all apps in parallel:**
```bash
pnpm dev
```

**Run individual apps:**
```bash
# Storefront (Customer app)
pnpm dev:storefront

# Admin dashboard
pnpm dev:admin

# Owner dashboard  
pnpm dev:owner
```

### **Building**

**Build all apps:**
```bash
pnpm build
```

**Build individual apps:**
```bash
pnpm build:storefront
pnpm build:admin
pnpm build:owner
```

### **Other Commands**
```bash
# Lint all packages
pnpm lint

# Clean all build artifacts
pnpm clean
```

## 📦 **Package Structure**

```
booking-platform-web/
├── apps/
│   ├── storefront/          # Customer booking app
│   ├── admin/              # Admin dashboard
│   └── owner/              # Business owner dashboard
├── shared/
│   ├── theme/              # Material-UI theme & styling
│   ├── components/         # Reusable UI components
│   └── utils/              # Shared utilities
├── packages/               # Future backend packages
├── package.json            # Root package.json
├── pnpm-workspace.yaml     # pnpm workspace config
└── .npmrc                  # pnpm configuration
```

## 🎨 **Shared Frontend Architecture**

The shared packages (`shared/`) are prepared for frontend-related code:

### **`@booking-platform/shared-theme`**
- Ready for theme configuration and design tokens
- Color palette, typography, component styles
- Theme provider and styling utilities

### **`@booking-platform/shared-components`**
- Ready for reusable UI components
- Business-specific components (BookingCard, SearchBar, etc.)
- Form components and layouts

### **`@booking-platform/shared-utils`**
- Ready for utility functions
- Date formatting, validation, API helpers
- Storage utilities and common functions

**Primary Colors:**
- **Booking Blue**: `#1976d2` - Primary brand color
- **Warm Orange**: `#ff6b35` - Call-to-action buttons
- **Success Green**: `#4caf50` - Confirmations
- **Warning Amber**: `#ff9800` - Alerts
- **Error Red**: `#f44336` - Errors/cancellations
