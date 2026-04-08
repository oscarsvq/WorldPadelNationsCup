# CLAUDE.md — World Padel Nations Cup

## Descripción del Proyecto
Landing page para la **World Padel Nations Cup**, un campeonato amateur de pádel por selecciones nacionales con Master Final en Barcelona (7-13 diciembre 2026).

**URL:** https://oscarsvq.github.io/WorldPadelNationsCup/

## Stack Técnico
- **HTML** estático (single page) + página de privacidad
- **Tailwind CSS v3** (build: `npm run build:css`)
- **Lucide Icons** (bundle local `lucide.min.js`)
- **EmailJS** para envío de formularios (bundle local `emailjs.min.js`)
- **Deploy:** GitHub Pages desde rama `main`
- Sin framework JS — vanilla JS en `<script>` inline

## Estructura de Archivos
```
index.html          — Landing principal (todo el contenido)
privacy.html        — Política de privacidad
input.css           — CSS fuente (Tailwind directives + custom)
styles.css          — CSS compilado (generado, no editar manualmente)
tailwind.config.js  — Configuración Tailwind (colores, fuentes, animaciones)
padel.mp4           — Vídeo de fondo hero + modal
poster.webp         — Poster del vídeo
logo.webp / padel.png — Logos
```

## Comandos
- `npm run build:css` — Compilar Tailwind (input.css → styles.css)
- `npm run watch:css` — Compilar en modo watch

## Secciones de la Landing
1. **Navbar** — Logo, WhatsApp, selector idioma ES/EN, CTA + menú hamburguesa móvil
2. **Hero** — Vídeo de fondo, título "Road to Barcelona", countdown, CTAs
3. **Marquee** — Franja dorada con datos clave animados
4. **Timeline** — 3 pasos: Fase Local → National Selection → World Final
5. **Barcelona Experience** — Grid imagen/contenido con experiencia VIP
6. **Country Selector** — Grid de 8 países con banderas (generado por JS)
7. **Formulario de Inscripción** — Sede, categoría, datos de 2 jugadores, envío por EmailJS
8. **Footer** — Logo, contacto, privacidad

## Países Participantes
España, México, Italia, Portugal, UK, Dubai (AE), Indonesia, Costa Rica

## Categorías
- Masculina: 1ª, 2ª, 3ª, 4ª
- Femenina: 2ª, 3ª, 4ª

## Sistema de Idiomas
- Bilingüe ES/EN con sistema i18n propio (`data-i18n` attributes)
- Persistencia en `localStorage` (`wpnc_lang`)
- Botones de idioma sincronizados entre desktop y móvil

## Design System
- **Estética:** Luxury Sports Editorial
- **Fuentes:** Syne (display/títulos), Manrope (body)
- **Colores principales:**
  - Dark: `#050A15` (base), `#0A1128` (cards)
  - Gold: `#E8B930` (primario), gradientes dorados
  - Scarlet: `#E63946` (acento)
- **Patrones:** diagonal, grid, dots, carbon fibre
- **Animaciones:** fade-in-up, reveal on scroll (IntersectionObserver), marquee, float

## EmailJS Config
- Public Key: `5AdKoAgz0GGmmWJ8_`
- Service ID: `service_hbcuqeg`
- Templates: `template_70ogxm4` (admin), `template_wdygavq` (usuario)

## Convenciones
- Commits en español con conventional commits (`feat:`, `fix:`, etc.)
- Tailwind utility-first, CSS custom solo para efectos especiales
- Siempre recompilar CSS tras cambios (`npm run build:css`)
- Accesibilidad: `aria-label`, `role`, skip-to-content, `prefers-reduced-motion`

---

## Planificacion y Roadmap

### Completado
- [x] Landing page completa con todas las secciones
- [x] Diseño Luxury Sports Editorial
- [x] Sistema de traducción ES/EN
- [x] Formulario de inscripción con EmailJS
- [x] Countdown al Master Final
- [x] Selector de países interactivo
- [x] Navegación responsive con menú hamburguesa móvil
- [x] Tipografía hero responsive (clamp con mínimos seguros para 320px+)
- [x] SEO básico (meta tags, Open Graph, Twitter Cards)
- [x] Accesibilidad básica (aria, skip-to-content, reduced-motion)

### Pendiente / Ideas Futuras
- [ ] Sección de sponsors/partners
- [ ] Galería de fotos o carrusel de ediciones anteriores
- [ ] FAQ / Preguntas frecuentes
- [ ] Blog o sección de noticias
- [ ] Integración con redes sociales (Instagram feed, etc.)
- [ ] Sección de resultados / clasificaciones en vivo
- [ ] Mapa interactivo de sedes
- [ ] Testimonios de jugadores
- [ ] Versión en más idiomas (IT, PT, etc.)
- [ ] PWA / instalable en móvil
- [ ] Analytics (Google Analytics / Plausible)

---

## Tipografía Responsive (referencia rápida)
```
display-lg: clamp(1.75rem, 8vw, 9rem)   — Hero title
display-md: clamp(1.75rem, 5vw, 5rem)   — Section titles
display-sm: clamp(1.25rem, 3vw, 2.5rem) — Subsection titles
```
- Siempre verificar que textos largos (ej. "BARCELONA") caben en 320px (280px contenido)
- Clase `.hero-title` con `overflow-wrap: break-word` + `max-width: 100%` como red de seguridad
- Contenedor hero con `overflow-hidden` para prevenir scroll horizontal

## Reglas aprendidas
- **Clamp font-size**: el valor mínimo del `clamp()` debe ser lo suficientemente pequeño para pantallas de 320px. Nunca usar mínimos > 2rem para títulos con palabras largas como "BARCELONA" (Syne ExtraBold es especialmente ancha).
- **Navbar móvil**: separar navegación desktop (`hidden md:flex`) y móvil (`flex md:hidden`) con menú hamburguesa desplegable. Sincronizar estado de idioma entre ambos.
- **Tailwind rebuild**: siempre ejecutar `npm run build:css` tras modificar `input.css`, `tailwind.config.js` o clases en `index.html`.
