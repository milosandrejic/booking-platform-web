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

## 🔧 **Technology Stack**

- **Frontend Frameworks**: Next.js 15 (storefront, owner) + React 19 + Vite (admin)
- **Language**: JavaScript (no TypeScript)
- **Package Manager**: pnpm with workspaces
- **Styling**: CSS Modules (ready for any UI library)
- **Linting**: ESLint with framework-specific configs
- **Architecture**: Monorepo with shared packages

## 📝 **Development Guidelines**

1. **File Extensions**: Use `.jsx` for components, `.js` for utilities
2. **Shared Frontend Code**: Put reusable components in `shared/components`
3. **Theme & Styling**: All styling goes in `shared/theme`
4. **Utilities**: Helper functions go in `shared/utils`
5. **Port Allocation**: 
   - Storefront: 8001
   - Admin: 8002  
   - Owner: 8003
6. **Package Naming**: Use `@booking-platform/` scope
7. **Clean Dependencies**: Apps only depend on Next.js and React, shared packages are optional

## 🚦 **Monorepo Benefits**

- **Code Sharing**: Shared UI components and theme across all apps
- **Consistent Dependencies**: Single version of React, MUI, etc.
- **Efficient Development**: Run all apps simultaneously
- **Atomic Changes**: Update shared packages and see changes across all apps
- **Better CI/CD**: Build and deploy related changes together
