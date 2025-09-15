# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Development Commands

### Development Server
```bash
# Start development server (Vite with HMR at localhost:8080)
npm run dev
# or
bun run dev
```

### Build & Preview
```bash
# Production build
npm run build

# Development build (useful for debugging)
npm run build:dev

# Preview production build locally
npm run preview
```

### Code Quality
```bash
# Run ESLint for code quality checks
npm run lint
```

### Package Management
This project uses both npm and bun - package-lock.json and bun.lockb are both present. Use npm for consistency.

## Architecture Overview

### Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **State Management**: TanStack Query for server state
- **Development**: Lovable platform integration for AI-assisted development

### Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui primitive components
│   ├── Header.tsx      # Main header with animated background
│   └── ToolCard.tsx    # Individual tool card with status indicators
├── pages/              # Route components
│   ├── Index.tsx       # Main dashboard page
│   └── NotFound.tsx    # 404 error page
├── lib/                # Utility functions
│   └── utils.ts        # Tailwind class merging utility
├── hooks/              # Custom React hooks
└── App.tsx            # Root application component with providers
```

### Design System
- **Theme**: Dark mode by default with light mode support
- **Colors**: HSL-based custom CSS variables defined in `src/index.css`
- **Typography**: Inter font family
- **Animations**: Custom keyframes for floating, fade-in-up, and glow effects
- **Gradients**: Primary and secondary gradients for branding
- **Shadows**: Glow effects for interactive elements

### Key Components

#### ToolCard Component
- Displays individual tools with animated hover effects
- Status indicators (online/offline/maintenance) with color coding
- Category badges and external link handling
- Staggered animation delays for grid layouts

#### Header Component
- Animated background elements with floating effects
- Gradient text styling for the main title
- Responsive typography scaling

## Development Guidelines

### Adding New Tools
Edit the `tools` array in `src/pages/Index.tsx`:
```typescript
const tools = [
  {
    name: "Tool Name",
    description: "Detailed description of the tool's functionality",
    url: "https://your-vps.com/tool-path",
    category: "Category Name",
    status: "online" | "offline" | "maintenance"
  }
];
```

### Component Development
- Use TypeScript interfaces for all prop types
- Follow the existing pattern of using `@/` imports for internal modules
- Leverage existing UI components from `@/components/ui/`
- Apply consistent animation patterns with staggered delays

### Styling Guidelines
- Use Tailwind CSS classes with the custom design system
- Leverage CSS custom properties for consistent theming
- Apply hover effects and transitions for better UX
- Use `bg-gradient-primary` and similar custom gradients for branding

### State Management
- Use TanStack Query for any server-side state
- Prefer local component state for UI-only interactions
- Toast notifications available via `@/components/ui/toaster`

### File Organization
- Components should be in `src/components/`
- Pages/routes in `src/pages/`
- Utilities in `src/lib/`
- Custom hooks in `src/hooks/`
- Use kebab-case for file names, PascalCase for components

## Configuration Files

### TypeScript Configuration
- `tsconfig.json`: Root config with project references
- `tsconfig.app.json`: App-specific TypeScript settings
- `tsconfig.node.json`: Node.js/build tool settings
- Path mapping configured for `@/*` to `./src/*`

### Build Configuration
- `vite.config.ts`: Development server on port 8080, SWC for fast compilation
- `components.json`: shadcn/ui configuration for component generation
- `tailwind.config.ts`: Extended Tailwind with custom design tokens

### Code Quality
- ESLint configured with React hooks and TypeScript rules
- `@typescript-eslint/no-unused-vars` disabled for development convenience
- React Refresh plugin for fast development iteration

## Deployment

### Lovable Platform
This project is integrated with Lovable for AI-assisted development:
- URL: https://lovable.dev/projects/1e471cfd-3ae4-4dc9-bcca-e18a69218500
- Changes via Lovable are automatically committed to the repository
- Use Lovable's Share -> Publish for deployment

### Local Development Integration
- Push changes to the repository to reflect them in Lovable
- Use standard Git workflow for version control
- The project supports both local IDE development and Lovable's web interface