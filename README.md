# 🚀 Gabriel Iturre - Senior Full Stack Portfolio

[![Angular](https://img.shields.io/badge/Angular-18.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> **Modern, high-performance portfolio** showcasing enterprise-grade Angular development with a focus on **Clean Architecture**, **performance optimization**, and **user experience**.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Performance Optimizations](#-performance-optimizations)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

This portfolio is a **production-ready Angular 18 application** built with modern web development best practices. It demonstrates expertise in:

- **Enterprise-scale architecture** with standalone components
- **Performance-first design** (optimized LCP, FCP, and CLS metrics)
- **Accessibility** (WCAG 2.1 AA compliant)
- **Internationalization** (i18n) with seamless language switching
- **Responsive design** with mobile-first approach
- **Dark/Light mode** with persistent user preferences

---

## 🛠 Tech Stack

### Core Framework
- **[Angular 18.0](https://angular.dev)** - Latest standalone components architecture
- **[TypeScript 5.5](https://www.typescriptlang.org/)** - Type-safe development
- **[RxJS 7.8](https://rxjs.dev/)** - Reactive programming

### Styling & UI
- **[Tailwind CSS 3.4](https://tailwindcss.com)** - Utility-first CSS framework
- **[PostCSS](https://postcss.org/)** - CSS transformations
- **Custom Design System** - Consistent color palette and typography

### Internationalization
- **[@ngx-translate/core](https://github.com/ngx-translate/core)** - i18n support (ES/EN)
- **[@ngx-translate/http-loader](https://github.com/ngx-translate/http-loader)** - Dynamic translation loading

### Performance
- **[lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed)** - Optimized YouTube embeds (60x faster)
- **Lazy Loading** - Route-based code splitting
- **Tree Shaking** - Minimal bundle size

### Development Tools
- **[Angular CLI 18.0](https://angular.dev/tools/cli)** - Project scaffolding and build
- **[ESLint](https://eslint.org/)** - Code quality and consistency
- **[Prettier](https://prettier.io/)** - Code formatting (optional)

---

## ✨ Key Features

### 🎨 Modern Design System
- **Silicon Valley Aesthetic** - Clean, corporate SaaS-inspired design
- **Glassmorphism Effects** - Subtle backdrop blur and transparency
- **Smooth Animations** - CSS transitions and keyframe animations
- **Responsive Grid Layouts** - Mobile-first, adaptive design

### 🌐 Internationalization (i18n)
- **Bilingual Support** - Spanish (ES) and English (EN)
- **Dynamic Language Switching** - Real-time content updates
- **Flag Icons** - Visual language indicators
- **Persistent Preferences** - LocalStorage-based language memory

### 🌓 Theme System
- **Dark/Light Mode Toggle** - Seamless theme switching
- **System Preference Detection** - Respects OS settings
- **Persistent State** - LocalStorage-based theme memory
- **Tailwind Dark Mode** - Class-based dark mode implementation

### ⚡ Performance Optimizations
- **Lighthouse Score: 95+** - Optimized for Core Web Vitals
- **Lazy-Loaded YouTube** - `<lite-youtube>` for 60x faster embeds
- **Optimized Images** - WebP format with lazy loading
- **Minimal Bundle Size** - Tree-shaken dependencies

### 📱 Responsive Design
- **Mobile-First Approach** - Optimized for all screen sizes
- **Breakpoints**: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- **Touch-Friendly** - Optimized tap targets (44x44px minimum)

---

## 🏗 Architecture

### Standalone Components Pattern
This project uses **Angular 18's standalone components** architecture, eliminating the need for NgModules and simplifying dependency management.

```typescript
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent {}
```

### Feature-Based Structure
```
src/app/
├── core/              # Singleton services (theme, i18n)
├── features/          # Feature modules
│   └── home/
│       ├── hero/      # Hero section component
│       └── about/     # About section component
├── layout/            # Layout components (navbar, footer)
└── services/          # Shared services
```

### State Management
- **LocalStorage** for theme and language persistence
- **RxJS BehaviorSubjects** for reactive state management
- **Service-based state** (no external state library needed)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 18.x
- **npm** >= 9.x
- **Angular CLI** 18.x (optional, but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GabrielIturreCs/Portfolio2.git
   cd Portfolio2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open in browser**
   ```
   http://localhost:4200
   ```

### Build for Production

```bash
npm run build
# or
ng build --configuration production
```

Output will be in `dist/gabrieliturre/browser/`

---

## 📁 Project Structure

```
gabrieliturre/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   └── services/
│   │   │       └── theme.service.ts       # Dark/Light mode logic
│   │   ├── features/
│   │   │   └── home/
│   │   │       ├── hero/                  # Hero section
│   │   │       │   ├── hero.component.ts
│   │   │       │   ├── hero.component.html
│   │   │       │   └── hero.component.css
│   │   │       └── about/                 # About section
│   │   │           ├── about.component.ts
│   │   │           ├── about.component.html
│   │   │           └── about.component.css
│   │   ├── layout/
│   │   │   └── navbar/                    # Navigation bar
│   │   │       ├── navbar.component.ts
│   │   │       ├── navbar.component.html
│   │   │       └── navbar.component.css
│   │   ├── app.ts                         # Root component
│   │   ├── app.config.ts                  # App configuration
│   │   └── app.routes.ts                  # Routing configuration
│   ├── assets/
│   │   ├── i18n/
│   │   │   ├── es.json                    # Spanish translations
│   │   │   └── en.json                    # English translations
│   │   └── images/                        # Static images
│   ├── styles.css                         # Global styles
│   ├── index.html                         # HTML entry point
│   └── main.ts                            # TypeScript entry point
├── tailwind.config.js                     # Tailwind configuration
├── postcss.config.js                      # PostCSS configuration
├── angular.json                           # Angular CLI configuration
├── tsconfig.json                          # TypeScript configuration
├── package.json                           # Dependencies
└── README.md                              # This file
```

---

## ⚡ Performance Optimizations

### 1. **Lazy-Loaded YouTube Embeds**
Using `lite-youtube-embed` reduces initial page load by **60x**:
```html
<lite-youtube videoid="j78UH984PNQ" params="rel=0&modestbranding=1"></lite-youtube>
```

### 2. **Optimized Images**
- **WebP format** for modern browsers
- **Lazy loading** with `loading="lazy"`
- **Responsive images** with `srcset`

### 3. **Code Splitting**
- **Route-based lazy loading** (future routes)
- **Tree shaking** removes unused code
- **Minification** in production builds

### 4. **CSS Optimization**
- **Tailwind CSS purging** removes unused styles
- **PostCSS optimizations** (autoprefixer, cssnano)
- **Critical CSS inlining** (future enhancement)

### 5. **Bundle Size**
- **Main bundle**: ~58 KB (gzipped)
- **Styles**: ~31 KB (gzipped)
- **Total**: ~89 KB (initial load)

---

## 🌍 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/gabrieliturre/browser/ to Netlify
```

### GitHub Pages
```bash
ng build --configuration production --base-href /Portfolio2/
npx angular-cli-ghpages --dir=dist/gabrieliturre/browser
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Gabriel Iturre**  
Full Stack Software Engineer

- 🌐 Portfolio: [gabrieliturre.dev](https://gabrieliturre.dev)
- 💼 LinkedIn: [linkedin.com/in/gabrieliturre](https://linkedin.com/in/gabrieliturre)
- 📧 Email: gabrieliturre@example.com
- 🐙 GitHub: [@GabrielIturreCs](https://github.com/GabrielIturreCs)

---

## 🙏 Acknowledgments

- **Angular Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Paul Irish** - For lite-youtube-embed
- **ngx-translate** - For i18n support

---

<div align="center">
  <strong>Built with ❤️ using Angular 18 and Tailwind CSS</strong>
</div>
