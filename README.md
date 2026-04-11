# Maison Blanche — Luxury Boutique Hotel Landing Page

Landing page editorial bilingüe para **Maison Blanche**, un hotel boutique ficticio inspirado en la Costa Amalfitana.  
El proyecto prioriza **atmósfera visual, narrativa premium y navegación clara** antes que patrones “de app”.

---

## ✨ Qué incluye

- **Astro 6** con salida **static**
- **Tailwind CSS v4** vía plugin de Vite
- Sitio **bilingüe**: español e inglés
- Arquitectura basada en **layouts + componentes + data modules**
- Páginas dedicadas para:
  - Inicio
  - Suites
  - Restaurant
  - Spa
  - Galería
  - Reserva
- Interacciones progresivas en cliente:
  - header con comportamiento dinámico
  - date picker
  - gallery lightbox
  - carruseles y microinteracciones

---

## 🧱 Stack técnico

| Capa | Tecnología |
| --- | --- |
| Framework | Astro |
| Estilos | Tailwind CSS v4 + CSS modular |
| Tipografía | DM Sans + EB Garamond |
| Interacciones | TypeScript en `src/lib/browser` |
| Deploy | Vercel |

---

## 📁 Estructura del proyecto

```text
.
├─ public/                  # Assets públicos
├─ src/
│  ├─ components/
│  │  ├─ forms/             # Campos y formulario de reserva
│  │  ├─ home/              # Secciones de homepage
│  │  ├─ layout/            # Head, header y footer
│  │  ├─ media/             # SmartImage y utilidades visuales
│  │  └─ sections/          # Bloques reutilizables por página
│  ├─ data/                 # Contenido estructurado (rooms, spa, gallery, etc.)
│  ├─ i18n/                 # Diccionarios ES / EN
│  ├─ layouts/              # BaseLayout y PageLayout
│  ├─ lib/
│  │  ├─ browser/           # Lógica cliente
│  │  ├─ routes.ts          # Rutas localizadas
│  │  └─ site.ts            # SEO y metadatos del sitio
│  ├─ pages/                # Rutas Astro en ES / EN
│  └─ styles/               # Base, componentes y vendors
├─ DESIGN.md                # North star visual / sistema de diseño
├─ astro.config.mjs         # Config de Astro
└─ package.json             # Scripts y dependencias
```

---

## 🌍 Rutas principales

### Español

- `/es`
- `/es/suites`
- `/es/restaurant`
- `/es/spa`
- `/es/galeria`
- `/es/reservar`

### English

- `/en`
- `/en/suites`
- `/en/restaurant`
- `/en/spa`
- `/en/gallery`
- `/en/reserve`

---

## 🧠 Cómo está pensado el proyecto

La idea NO es solamente “tener una landing linda”.  
La idea es construir una experiencia premium con estas reglas:

1. **Editorial over app**  
   Mucho aire, tipografía expresiva y jerarquías visuales fuertes.

2. **Contenido desacoplado**  
   El texto y datasets viven fuera de los componentes cuando tiene sentido.

3. **Bilingüe desde la estructura**  
   No es un parche: las rutas y diccionarios ya contemplan ES/EN.

4. **Interacciones discretas**  
   Nada de sobrecargar el sitio; sólo microinteracciones que eleven la percepción.

Si querés profundizar en la dirección visual, leé [`DESIGN.md`](./DESIGN.md).

---

## 🚀 Desarrollo local

### 1) Instalar dependencias

```bash
npm install
```

### 2) Levantar entorno local

```bash
npm run dev
```

### 3) Abrir en navegador

```text
http://localhost:4321
```

---

## 🛠️ Scripts disponibles

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Inicia el servidor local de Astro |
| `npm run build` | Genera la versión estática del sitio |
| `npm run preview` | Previsualiza el build generado |

---

## 🎨 Diseño y decisiones visuales

El sistema visual sigue una dirección muy clara:

- paleta cálida y mineral
- serif editorial para identidad
- sans moderna para legibilidad
- CTAs tipo pill
- sombras atmosféricas, no agresivas
- cero look de dashboard

Esto está definido en [`DESIGN.md`](./DESIGN.md) y reflejado principalmente en:

- `src/styles/base.css`
- `src/styles/components.css`
- `src/layouts/`
- `src/components/`

---

## 📦 Deploy en Vercel

Este proyecto funciona muy bien en Vercel porque Astro genera una salida **static**.

### Opción recomendada

1. Importar el repositorio en Vercel
2. Framework preset: **Astro**
3. Build command: `astro build` o `npm run build`
4. Output directory: `dist`
5. Variable opcional:

```text
SITE_URL=https://tu-dominio.vercel.app
```

### Deploy por CLI

```bash
vercel
```

Para producción:

```bash
vercel --prod
```

---

## 📌 Recomendaciones siguientes

Si querés llevar este proyecto a un nivel todavía más sólido:

- conectar el formulario de reserva a un backend o servicio de email
- agregar analytics y eventos de conversión
- optimizar imágenes editoriales para Core Web Vitals
- sumar tests visuales o smoke tests sobre rutas críticas

---

## 🤍 Filosofía del proyecto

Este sitio intenta comunicar lujo, calma y precisión.  
No compite por gritar más fuerte; compite por **verse mejor, respirar mejor y sentirse más caro**.

Y eso, honestamente, es lo que hace que una landing de hospitality funcione de verdad.
