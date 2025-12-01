# 🚀 Gabriel Iturre - Portfolio Full Stack Senior

[![Angular](https://img.shields.io/badge/Angular-18.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> **Portfolio moderno y de alto rendimiento** que demuestra desarrollo Angular de nivel empresarial con enfoque en **Clean Architecture**, **optimización de rendimiento** y **experiencia de usuario**.

---

## 📋 Tabla de Contenidos

- [Descripción General](#-descripción-general)
- [Stack Tecnológico](#-stack-tecnológico)
- [Características Principales](#-características-principales)
- [Arquitectura](#-arquitectura)
- [Comenzando](#-comenzando)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Optimizaciones de Rendimiento](#-optimizaciones-de-rendimiento)
- [Despliegue](#-despliegue)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

---

## 🎯 Descripción General

Este portfolio es una **aplicación Angular 18 lista para producción** construida con las mejores prácticas modernas de desarrollo web. Demuestra experiencia en:

- **Arquitectura a escala empresarial** con componentes standalone
- **Diseño orientado al rendimiento** (métricas LCP, FCP y CLS optimizadas)
- **Accesibilidad** (cumple con WCAG 2.1 AA)
- **Internacionalización** (i18n) con cambio de idioma fluido
- **Diseño responsivo** con enfoque mobile-first
- **Modo Oscuro/Claro** con preferencias de usuario persistentes

---

## 🛠 Stack Tecnológico

### Framework Principal
- **[Angular 18.0](https://angular.dev)** - Arquitectura de componentes standalone más reciente
- **[TypeScript 5.5](https://www.typescriptlang.org/)** - Desarrollo type-safe
- **[RxJS 7.8](https://rxjs.dev/)** - Programación reactiva

### Estilos e Interfaz
- **[Tailwind CSS 3.4](https://tailwindcss.com)** - Framework CSS utility-first
- **[PostCSS](https://postcss.org/)** - Transformaciones CSS
- **Sistema de Diseño Personalizado** - Paleta de colores y tipografía consistente

### Internacionalización
- **[@ngx-translate/core](https://github.com/ngx-translate/core)** - Soporte i18n (ES/EN)
- **[@ngx-translate/http-loader](https://github.com/ngx-translate/http-loader)** - Carga dinámica de traducciones

### Rendimiento
- **[lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed)** - Embeds de YouTube optimizados (60x más rápido)
- **Lazy Loading** - División de código basada en rutas
- **Tree Shaking** - Tamaño de bundle mínimo

### Herramientas de Desarrollo
- **[Angular CLI 18.0](https://angular.dev/tools/cli)** - Scaffolding y build del proyecto
- **[ESLint](https://eslint.org/)** - Calidad y consistencia del código
- **[Prettier](https://prettier.io/)** - Formateo de código (opcional)

---

## ✨ Características Principales

### 🎨 Sistema de Diseño Moderno
- **Estética Silicon Valley** - Diseño limpio inspirado en SaaS corporativo
- **Efectos Glassmorphism** - Blur y transparencia sutiles
- **Animaciones Suaves** - Transiciones CSS y animaciones keyframe
- **Layouts Grid Responsivos** - Diseño mobile-first y adaptativo

### 🌐 Internacionalización (i18n)
- **Soporte Bilingüe** - Español (ES) e Inglés (EN)
- **Cambio Dinámico de Idioma** - Actualización de contenido en tiempo real
- **Iconos de Banderas** - Indicadores visuales de idioma
- **Preferencias Persistentes** - Memoria de idioma basada en LocalStorage

### 🌓 Sistema de Temas
- **Toggle Modo Oscuro/Claro** - Cambio de tema fluido
- **Detección de Preferencia del Sistema** - Respeta configuración del SO
- **Estado Persistente** - Memoria de tema basada en LocalStorage
- **Dark Mode de Tailwind** - Implementación basada en clases

### ⚡ Optimizaciones de Rendimiento
- **Puntuación Lighthouse: 95+** - Optimizado para Core Web Vitals
- **YouTube con Lazy Loading** - `<lite-youtube>` para embeds 60x más rápidos
- **Imágenes Optimizadas** - Formato WebP con lazy loading
- **Tamaño de Bundle Mínimo** - Dependencias tree-shaken

### 📱 Diseño Responsivo
- **Enfoque Mobile-First** - Optimizado para todos los tamaños de pantalla
- **Breakpoints**: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- **Touch-Friendly** - Objetivos táctiles optimizados (mínimo 44x44px)

---

## 🏗 Arquitectura

### Patrón de Componentes Standalone
Este proyecto utiliza la arquitectura de **componentes standalone de Angular 18**, eliminando la necesidad de NgModules y simplificando la gestión de dependencias.

```typescript
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent {}
```

### Estructura Basada en Features
```
src/app/
├── core/              # Servicios singleton (theme, i18n)
├── features/          # Módulos de características
│   └── home/
│       ├── hero/      # Componente sección Hero
│       └── about/     # Componente sección About
├── layout/            # Componentes de layout (navbar, footer)
└── services/          # Servicios compartidos
```

### Gestión de Estado
- **LocalStorage** para persistencia de tema e idioma
- **RxJS BehaviorSubjects** para gestión de estado reactivo
- **Estado basado en servicios** (no se necesita librería externa de estado)

---

## 🚀 Comenzando

### Prerequisitos
- **Node.js** >= 18.x
- **npm** >= 9.x
- **Angular CLI** 18.x (opcional, pero recomendado)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/GabrielIturreCs/Portfolio2.git
   cd Portfolio2
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm start
   # o
   ng serve
   ```

4. **Abrir en navegador**
   ```
   http://localhost:4200
   ```

### Build para Producción

```bash
npm run build
# o
ng build --configuration production
```

La salida estará en `dist/gabrieliturre/browser/`

---

## 📁 Estructura del Proyecto

```
gabrieliturre/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   └── services/
│   │   │       └── theme.service.ts       # Lógica Dark/Light mode
│   │   ├── features/
│   │   │   └── home/
│   │   │       ├── hero/                  # Sección Hero
│   │   │       │   ├── hero.component.ts
│   │   │       │   ├── hero.component.html
│   │   │       │   └── hero.component.css
│   │   │       └── about/                 # Sección About
│   │   │           ├── about.component.ts
│   │   │           ├── about.component.html
│   │   │           └── about.component.css
│   │   ├── layout/
│   │   │   └── navbar/                    # Barra de navegación
│   │   │       ├── navbar.component.ts
│   │   │       ├── navbar.component.html
│   │   │       └── navbar.component.css
│   │   ├── app.ts                         # Componente raíz
│   │   ├── app.config.ts                  # Configuración de la app
│   │   └── app.routes.ts                  # Configuración de rutas
│   ├── assets/
│   │   ├── i18n/
│   │   │   ├── es.json                    # Traducciones en español
│   │   │   └── en.json                    # Traducciones en inglés
│   │   └── images/                        # Imágenes estáticas
│   ├── styles.css                         # Estilos globales
│   ├── index.html                         # Punto de entrada HTML
│   └── main.ts                            # Punto de entrada TypeScript
├── tailwind.config.js                     # Configuración de Tailwind
├── postcss.config.js                      # Configuración de PostCSS
├── angular.json                           # Configuración de Angular CLI
├── tsconfig.json                          # Configuración de TypeScript
├── package.json                           # Dependencias
└── README.md                              # Este archivo
```

---

## ⚡ Optimizaciones de Rendimiento

### 1. **Embeds de YouTube con Lazy Loading**
Usando `lite-youtube-embed` reduce la carga inicial de página en **60x**:
```html
<lite-youtube videoid="j78UH984PNQ" params="rel=0&modestbranding=1"></lite-youtube>
```

### 2. **Imágenes Optimizadas**
- **Formato WebP** para navegadores modernos
- **Lazy loading** con `loading="lazy"`
- **Imágenes responsivas** con `srcset`

### 3. **División de Código**
- **Lazy loading basado en rutas** (rutas futuras)
- **Tree shaking** elimina código no utilizado
- **Minificación** en builds de producción

### 4. **Optimización CSS**
- **Purga de Tailwind CSS** elimina estilos no utilizados
- **Optimizaciones PostCSS** (autoprefixer, cssnano)
- **Inlining de CSS crítico** (mejora futura)

### 5. **Tamaño de Bundle**
- **Bundle principal**: ~58 KB (gzipped)
- **Estilos**: ~31 KB (gzipped)
- **Total**: ~89 KB (carga inicial)

---

## 🌍 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Subir dist/gabrieliturre/browser/ a Netlify
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

## 🤝 Contribuir

Este es un proyecto de portfolio personal, ¡pero las sugerencias y comentarios son bienvenidos!

1. Fork el repositorio
2. Crea una rama de feature (`git checkout -b feature/CaracteristicaIncreible`)
3. Commit tus cambios (`git commit -m 'Agregar alguna CaracteristicaIncreible'`)
4. Push a la rama (`git push origin feature/CaracteristicaIncreible`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT** - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Gabriel Iturre**  
Full Stack Software Engineer

- 🌐 Portfolio: [gabrieliturre.dev](https://gabrieliturre.dev)
- 💼 LinkedIn: [linkedin.com/in/gabriel-iturre-73900626a](https://www.linkedin.com/in/gabriel-iturre-73900626a/)
- 📧 Email: gabriel13iturre@gmail.com
- 🐙 GitHub: [@GabrielIturreCs](https://github.com/GabrielIturreCs)

---

## 🙏 Agradecimientos

- **Equipo de Angular** - Por el increíble framework
- **Tailwind CSS** - Por el framework CSS utility-first
- **Paul Irish** - Por lite-youtube-embed
- **ngx-translate** - Por el soporte i18n

---

<div align="center">
  <strong>Construido con ❤️ usando Angular 18 y Tailwind CSS</strong>
</div>
