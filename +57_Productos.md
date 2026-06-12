# +57 Productos

57Productos/
├── public/
│   ├── fonts/agrandir/            # Familia tipográfica Agrandir
│   └── img/                       # Logo, favicon, shapes
│
├── src/
│   ├── app/                       # App Router (Next.js)
│   │   ├── layout.tsx
│   │   ├── (default)/
│   │   ├── [locale]/              # Rutas dinámicas por idioma
│   │   └── api/menu/route.ts      # Endpoint API del menú
│   │
│   ├── components/
│   │   ├── logo.tsx / theme.tsx
│   │   └── ui/
│   │       ├── icon/
│   │       └── menu/              # Componentes del menú (estilos CSS-in-JS)
│   │
│   ├── contexts/ThemeContext.tsx   # Dark/light mode
│   ├── hooks/useIsMobile.ts
│   │
│   ├── i18n/                      # Traducciones EN/ES + routing
│   │   ├── en.json / es.json
│   │   ├── proxy.ts / request.ts / routing.ts
│   │
│   ├── layouts/                   # Header, Footer, RootLayout
│   │
│   ├── resources/                 # Configuración global
│   │   ├── ENV.ts / SEO.ts / config.ts
│   │   ├── font.config.ts / tailwindtheme.config.ts
│   │   └── types.d.ts
│   │
│   ├── server/
│   │   ├── data/menu/             # JSON de menú estático (EN/ES)
│   │   ├── db/                    # Capa de base de datos (Supabase)
│   │   │   ├── client.ts / server.ts / proxy.ts
│   │   │   ├── db.types.ts
│   │   │   ├── types/ (common.ts, tables.ts, tables.sql)
│   │   │   ├── services/ (get.ts, response.ts)
│   │   │   └── repositories/menuRepository/
│   │   ├── menuRepository/getMenu.ts
│   │   └── services/api/          # apiResponse, apiRoutes, read, response
│   │
│   ├── styles/                    # SCSS global + componentes + vendor
│   └── utils/index.ts
│
├── next.config.ts / next-intl.config.ts
├── tailwind.config.ts / tsconfig.json
└── +57_Productos.md               

# Características Generales

## Idiomas

### Multiidioma

Idiomas soportados:

- Español (ES)
- Inglés (EN)

Características:

- Cambio de idioma visible en el Header.
- Traducción completa de la interfaz.
- Traducción de páginas dinámicas.
- Traducción de formularios.
- Traducción de metadatos SEO.
---

# Responsive Design

Compatibilidad:

- Desktop
- Laptop
- Tablet
- Mobile

Breakpoints:

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

Objetivos:

- Navegación optimizada.
- Contenido legible.
- Componentes adaptables.

---

# SEO

Optimización para motores de búsqueda.

Incluye:

- Meta Title dinámico.
- Meta Description dinámica.
- Open Graph.
- Twitter Cards.
- Sitemap.xml.
- Robots.txt.
- URLs amigables.

---

# Accesibilidad

Objetivos:

- Navegación por teclado.
- Contraste adecuado.
- Etiquetas semánticas.
- Compatibilidad con lectores de pantalla.

---

# Rendimiento

Objetivos:

- Carga rápida.
- Optimización de imágenes.
- Lazy Loading.
- Componentes optimizados.
- Animaciones ligeras.

---

# Formularios

Características:

- Validación en tiempo real.
- Mensajes de error claros.
- Confirmación de envío.
- Protección anti-spam.

---

# Navegación

Incluye:

- Header fijo.
- Menú responsive.
- Breadcrumbs en páginas internas.
- Footer con navegación secundaria.

---

# Gestión de Contenido

Contenido administrable mediante CMS.

Elementos editables:

- Banners.
- Productos.
- Categorías.
- Lugares.
- Artículos.
- Formularios.
- Configuración general.

---

# Productos

Características:

- Listado de productos.
- Categorías.
- Filtros.
- Búsqueda.
- Páginas individuales.
- Galería de imágenes.

---

# Contacto

Canales:

- Formulario de contacto.
- Correo electrónico.
- WhatsApp.
- Redes sociales.

---

# Seguridad

Implementaciones:

- HTTPS.
- Protección contra spam.
- Validación de formularios.
- Sanitización de datos.

---

# Analítica

Integraciones:

- Google Analytics.
- Google Search Console.
- Seguimiento de eventos.
- Medición de conversiones.

---

# Experiencia de Usuario

Objetivos:

- Navegación intuitiva.
- Información clara.
- Flujo de conversión optimizado.
- Experiencia consistente entre dispositivos.

---

# Tecnologías

- Next.js 14+ (App Router)
- Supabase (DB + Auth + Storage)
- TanStack Query (React Query)
- Zustand
- React Hook Form + Zod
- Tailwind CSS + Shadcn/UI
- Vercel

CMS:

- Creado desde cero (Omitir por ahora)

Automatizaciones:

- n8n

Despliegue:
- Vercel

---

# Escalabilidad

Preparado para:

- Nuevos idiomas.
- Nuevas categorías.
- Nuevos tipos de contenido.
- Integraciones futuras.
- Expansión internacional.



## SITIO ESTILOS

# Guía de Estilo Visual

## Colores

### Negro Principal

```txt
#111111
```

Uso:

* Títulos
* Botones principales
* Navegación
* Iconografía

### Blanco

```txt
#FFFFFF
```

Uso:

* Fondos principales
* Cards
* Formularios

### Azul de Acento

```txt
#9EE8FF
```

Uso:

* Hover
* Indicadores
* Estados activos
* Enlaces destacados

### Gris Oscuro

```txt
#666666
```

Uso:

* Texto secundario

### Gris Claro

```txt
#EAEAEA
```

Uso:

* Bordes
* Separadores

### Fondo Secundario

```txt
#F7F7F7
```

Uso:

* Secciones alternas
* Cards secundarias

---

# Tipografía

## Títulos

Fuente:

```txt
Playfair Display
```

Peso:

```txt
700
```

### H1

```txt
72px
Line Height: 80px
```

### H2

```txt
48px
Line Height: 56px
```

### H3

```txt
36px
Line Height: 44px
```

---

## Texto General

Fuente:

```txt
Inter
```

### Texto Grande

```txt
20px
Line Height: 32px
Weight: 400
```

### Texto Normal

```txt
18px
Line Height: 28px
Weight: 400
```

### Texto Secundario

```txt
16px
Line Height: 24px
Weight: 400
```

### Texto Pequeño

```txt
14px
Line Height: 20px
Weight: 400
```

---

# Botones

## Principal

```txt
Font: Inter
Size: 18px
Weight: 600

Padding Vertical: 15px
Padding Horizontal: 35px

Border Radius: 12px

Background: #111111
Color: #FFFFFF
```

---

## Secundario

```txt
Font: Inter
Size: 18px
Weight: 600

Padding Vertical: 15px
Padding Horizontal: 35px

Border Radius: 12px

Background: Transparent
Border: 1px solid #111111
Color: #111111
```

---

# Cards

```txt
Border Radius: 20px

Padding: 32px

Background: #FFFFFF

Border: 1px solid #EAEAEA
```

---

# Inputs

```txt
Height: 52px

Border Radius: 12px

Border: 1px solid #EAEAEA

Font Size: 16px
```

---

# Espaciados

### Entre Secciones

```txt
120px
```

### Entre Bloques Grandes

```txt
48px
```

### Entre Título y Descripción

```txt
32px
```

### Entre Elementos Relacionados

```txt
24px
```

### Entre Elementos Pequeños

```txt
16px
```

### Espaciado Base

```txt
8px
```

---

# Header

```txt
Height: 88px
```

Logo:

```txt
40px - 48px de alto
```

Navegación:

```txt
16px
Weight: 500
```

---

# Contenedor Principal

```txt
Max Width: 1440px
```

Contenido:

```txt
Max Width: 1280px
```

---

# Imágenes

```txt
Border Radius: 20px
```

Formato:

```txt
Fotografía real
Agricultura
Exportación
Comercio internacional
```

---

# Estilo General

```txt
Minimalista
Editorial
Profesional
Moderno
Elegante
Confiable
Internacional
```


# Animaciones

## Filosofía

Las animaciones deben complementar la experiencia, no distraer al usuario.

Principios:

- Suaves y naturales.
- Duración corta.
- Sin movimientos excesivos.
- Priorizar opacidad y transformaciones.
- Evitar animaciones continuas innecesarias.
- Mantener consistencia en todo el sitio.

---

# Animaciones de Entrada

## Secciones

Al entrar en viewport:

- Fade In
- Translate Y: 20px → 0px
- Duración: 0.6s
- Easing: ease-out

Uso:
- Hero
- Secciones
- Cards
- Formularios

---

## Títulos

- Opacidad: 0 → 1
- Translate Y: 16px → 0px
- Duración: 0.5s
- Delay: 0.1s

---

## Descripciones

- Opacidad: 0 → 1
- Translate Y: 12px → 0px
- Duración: 0.5s
- Delay: 0.2s

---

## Botones

- Opacidad: 0 → 1
- Escala: 0.95 → 1
- Duración: 0.4s

---

## Imágenes

- Opacidad: 0 → 1
- Escala: 1.05 → 1
- Duración: 0.8s

---

# Hover States

## Botones

Hover:

- Scale: 1 → 1.03
- Duración: 0.25s

Active:

- Scale: 1 → 0.98
- Duración: 0.15s

---

## Cards

Hover:

- Translate Y: 0 → -4px
- Duración: 0.3s

Sombra:

- Incrementar ligeramente la profundidad

---

## Imágenes

Hover:

- Scale: 1 → 1.03
- Duración: 0.5s

---

## Links

Hover:

- Cambio de color al azul de acento
- Transición: 0.25s

---

# Animaciones Activas

## Hero Principal

Elementos flotantes decorativos:

- Movimiento vertical suave
- Rango: 8px
- Duración: 4s
- Infinito
- Ease In Out

---

## Fondos Decorativos

Gradientes o elementos visuales:

- Movimiento muy lento
- Duración: 15s – 30s
- Opacidad baja

---

## Indicadores

Badges, estadísticas o chips:

- Pulso suave cada 4s
- Escala máxima: 1.02

---

# Aparición Escalonada

Para listas, beneficios y cards:

Card 1: 0ms
Card 2: 100ms
Card 3: 200ms
Card 4: 300ms

Máximo delay recomendado:

300ms

---

# Duraciones Estándar

Rápida:

300ms

Media:

500ms

Lenta:

800ms

---

# Librerías Recomendadas

Frontend:

- Motion (Framer Motion)
- GSAP (solo para casos complejos)

Evitar:

- Animaciones CSS excesivas
- Efectos parallax agresivos
- Animaciones infinitas innecesarias

---

# Regla General

Si una animación llama más la atención que el contenido, debe eliminarse.

El contenido siempre debe ser el protagonista.

----------------------------------------------------------------------

## Paginas + 57 Productos

1. Inicio
2. Nosotros
    - Historia
    - Equipo
3. Productos
4. Agricultores
5. Compradores
6. Blog
7. Contacto
8. ¿Eres Agricultor?

## Blog - item

TIPO BANNER

Título del artículo

Fecha

Categoría

imagen

### CONTENIDO

parrafo corto

--------------------

### CONTENIDO extendido

### CONTENIDO EN MEDIO DEL EXTENDIDO

¿Si es producto:

¿Buscas este producto?
→ Ver productos / contactar

Si es informativo:

¿Te interesa trabajar con productos colombianos?
→ Contactar

--------------------

CTA:

Puedes escribirnos si quieres más información

hablemos

---

## PRODUCTO / INTERNA

Titulo 3

### Izquierda:

- Imagen del producto (o galería)

### Derecha:

Nombre del producto (ej: Mango Tommy)

- Origen: Caribe colombiano
- Disponibilidad: Mar – Jul
- Estado: En temporada
- Cantidad aproximada: Según cosecha

### CTA principal

- Solicitar información
- Consultar disponibilidad

Descripción:

Producto cultivado en condiciones ideales, con características que lo hacen apto para exportación y mercados internacionales.

### Ficha técnica

- Variedad
- Calibre / tamaño
- Tipo de empaque
- Vida útil estimada
- Condiciones de almacenamiento

### Certificaciones / seguridad

#### Cumplimiento y calidad

- Certificaciones (si tienes)
- Buenas prácticas agrícolas
- Procesos de control

#### Disponibilidad del producto

- Meses activos
- Posibles variaciones

### Importante

La disponibilidad y condiciones pueden variar según temporada y producción.
Para información más precisa, te recomendamos contactarnos directamente.

### CTA secundario

- Solicitar información
- Hablar por WhatsApp

Productos relacionados

---

## Blog

**Titulo:** Blog

**Subtitulo:**

Información sobre productos, temporadas y exportación desde Colombia.

[categorias, recientes]

### Categororías

Ejemplo:

- Productos
- Temporadas
- Exportación
- Campo colombiano

### ARTICULOS:

imagen

titulo del articulo

Pequeño resumen (2 líneas)

Fecha

ver mas

--------------------

¿Buscas productos disponibles actualmente o estas interesado en exportar?
→ Hablemos

---

## Inicio

**Título:** Conectamos el campo colombiano con el mercado internacional

**Resumen:** Trabajamos directamente con agricultores y compradores para llevar productos colombianos al exterior de forma segura y transparente.

Botones:

**Soy agricultor**

**Soy comprador**

### Lleva tu esfuerzo al mundo

Conectamos tus productos con compradores en el exterior que valoran la calidad colombiana.

Si eres agricultor colombiano y quieres que tu producción cruce fronteras, déjanos tus datos.
Te acompañamos en todo el proceso para hacerlo realidad.

✓ Asesoría en documentación
✓ Logística internacional
✓ Conexión con compradores reales

Botón: Quiero exportar mi producción

### Tu mercado con productos colombianos

Trabajamos directamente con agricultores en Colombia para ofrecerte productos de calidad, precios justos y un proceso de exportación claro y seguro.

✓ Calidad garantizada
✓ Precios competitivos
✓ Productores verificados

Botón: Ver productos

**Título:** Productos de temporada

**Subtitulo:** Revisa qué productos están disponibles y cuáles vienen en los próximos meses.

Detalles Sección:

Lista tarjetas mostrando:

title: Mango

foto (en color para cada caso) en temporada

CTA: ver más

---

**Título:** ¿Así trabajamos contigo?

**Subtitulo:** No importa si produces o si buscas comprar. Te acompañamos paso a paso para que todo sea claro y sin complicaciones.

Pasos:

Nos cuentas qué tienes o qué necesitas

Revisamos la viabilidad y condiciones

Nos encargamos del proceso para que todo fluya

**Título:** Trabajar con nosotros es diferente

**Subtitulo:** No buscamos solo intermediar. Buscamos hacer las cosas bien, de forma clara y justa para todos.

Puntos:

✓ Trato directo, sin enredos

✓ Acompañamiento real en todo el proceso

✓ Enfoque en relaciones a largo plazo

✓ Compromiso con el trabajo del campo

**Título:** Hay trabajo real detrás de esto

**Subtitulo:** Trabajamos con agricultores de distintas regiones del país, conectando su producción con oportunidades fuera de Colombia.

(Galería, mapa, algo para incluir)

### CTA

Título: ¿Te gustaría hacer parte de esto?

Subtitulo: Si eres agricultor o estás buscando productos colombianos, este puede ser el inicio de algo grande.

Botones:

- Quiero exportar mi producción
- Quiero comprar productos

---

## Equipo

Título: Quién está detrás de esto

Detrás de +57 Productos hay personas comprometidas con hacer las cosas bien y con llevar el trabajo del campo colombiano más lejos.

### Integrantes:

#### YO:

Nombre: josué bedoya

Relato: Hola, Soy Josué Castillo nacido en el corazón de Colombia, trabajando con amor hacia el campo, me nace ayudar a los campesinos a ganar un valor justo por sus productos.

#### MR. GATO

Nombre: Don Gato

Relato: Miau, Miau, Así es Don Gato tiene un papel importante en nuestro equipo, ya que nos ha acompañado desde el comienzo y se merece el crédito necesario.

No lo mires fijamente (Te rasguña jaja)

### SLOGAN

Este equipo sigue creciendo con el objetivo de llevar más productos colombianos al mundo.

---

## Perfil

---

## Contacto

Título:

Hablemos

Subtitulo:

Si tienes preguntas, quieres trabajar con nosotros o necesitas información, puedes escribirnos. Te responderemos lo antes posible.

CONTACTO:

whatsapp: +573020055577

correo: info@57productos.com

correo: peticiones@57productos.com

redes: instagram, tiktok

Título:

Déjanos tu mensaje

Campos:

### Si es Agricultor

- Nombre completo
- Ubicación (Departamento / Municipio)
- ¿Qué productos trabajas?
- Cantidad aproximada (opcional)
- Teléfono / WhatsApp
- Mensaje (opcional)

### Si es Comprador

- Nombre / Empresa
- País
- ¿Qué producto buscas?
- Cantidad estimada (opcional)
- Correo o WhatsApp
- Mensaje (opcional)

Antes del botón:

para agricultores:

No necesitas tener todo listo. Con esta información podemos orientarte.

Para compradores:

Con estos datos podemos entender tu necesidad y darte una mejor respuesta.

Botón:

Quiero empezar (agricultor)

Solicitar información (comprador)

---

## Compradores

Título: Tu mercado con productos colombianos

Subtitulo: Conectamos tu negocio con productos agrícolas de calidad, gestionando todo el proceso de exportación de forma clara y segura.

Botón: Solicitar información

Título: ¿Qué puedes encontrar con nosotros?

✓ Productos seleccionados

✓ Productores verificados

✓ Precios competitivos

✓ Acompañamiento en todo el proceso

Título: Productos disponibles

- Frutas
- Café
- Cacao
- Tubérculos
- Otros productos según temporada

Puedes revisar la disponibilidad actual y las próximas temporadas en nuestro calendario de productos.

Ver calendario de productos

Título: Así trabajamos

1. Nos cuentas qué necesitas
2. Evaluamos disponibilidad
3. Gestionamos la exportación
4. Coordinamos entrega

Título: Un proceso claro y confiable

Trabajamos directamente con agricultores y nos encargamos de que cada etapa cumpla con los requisitos necesarios para una exportación segura.

¿Buscas algo específico?

Si tienes un requerimiento puntual, o buscas algún producto en específico.

puedes escribirnos y lo revisamos contigo.

CTA: Solicitar información

Otro botón: Ver productos

Campos:

- Nombre / empresa
- Producto de interés
- Cantidad
- País
- Contacto

Botón:

Enviar solicitud

---

## Agricultores

Titulo: Lleva tu esfuerzo al mundo

Subtitulo:

Conectamos tu producción con compradores internacionales que valoran la calidad colombiana.

Botón: Quiero exportar mi producción

### ¿Qué ganas tu?

Titulo: ¿Qué puedes lograr con nosotros?

✓ Acceder a compradores en el exterior

✓ Obtener mejores precios por tu producción

✓ Acompañamiento en todo el proceso

✓ Oportunidades reales de exportación

Titulo: ¿A dónde pueden llegar tus productos?

Tu producción no se queda solo aquí.

La ayudamos para conectar tus productos con compradores en distintos mercados del exterior.

(Mapa imagen, con fecha apuntando al exterior)

Titulo: Así trabajamos contigo

1. Nos cuentas qué produces
2. Revisamos si es viable para exportación
3. Te acompañamos en todo el proceso

Titulo: ¿Qué necesitas para empezar?

- Tener producción disponible
- Información básica del producto
- Disposición para trabajar en procesos de exportación

Titulo: No estás solo en este proceso

Te acompañamos desde el inicio, resolviendo dudas y ayudándote a entender cada paso.

Déjanos tus datos

Campos:

- Nombre
- Ubicación
- Producto(s)
- Cantidad aproximada
- Teléfono / WhatsApp

Botón:

Quiero empezar

Cierre

Texto: Este puede ser el inicio de nuevas oportunidades para tu producción.

---

## Productos

### Productos colombianos disponibles

Explora nuestra oferta según temporada y disponibilidad para exportación.

Filtros, categorías

Lista de products

card: titulo, disponibilidad (en temporada, próximo, agotado etc), ctaver detalles

--------------------

### No trabajamos con inventario fijo

Los productos dependen de temporada, producción y condiciones del campo.

Si buscas algo específico, podemos revisarlo contigo.

### Disponibilidad durante el año

Pequeña visual o enlace:

Calendario (integrado, no protagonista)

btn: Ver calendario completo

--------------------

### CTA: ¿Buscas algo específico?

Si necesitas un producto en particular o quieres conocer disponibilidad, puedes escribirnos.

- Solicitar información
- Contactar

---

## Nosotros

### HISTORIA

#### Nacimiento

+57 Productos Colombia nace al ver de cerca la realidad de muchos agricultores colombianos:

productos de gran calidad, pero precios que no compensaban su esfuerzo.

Fue ahí donde surgió una pregunta clave:

¿Por qué no llevar el sabor y el trabajo colombiano más allá de nuestras fronteras?

### Con esa idea empezamos a contactar agricultores, motivándolos a creer que su trabajo podía ser valorado en otros mercados.

#### Inicios

Comenzamos con exportaciones pequeñas, dando los primeros pasos en el mercado internacional.

Poco a poco, fuimos ganando espacio y confianza, tanto en el exterior como con los agricultores.

Cada avance fue importante.

Más productores se fueron sumando, viendo que sí era posible llevar sus productos más lejos.

#### Dificultades

El camino no fue fácil. Nos enfrentamos a trámites complejos, falta de contactos y procesos que no conocíamos.

Pero nunca fue motivo para detenernos.

La motivación de los agricultores y el compromiso con su trabajo nos permitió superar cada obstáculo y seguir avanzando.

#### Hoy

Hoy, +57 Productos Colombia es una empresa construida con orgullo, representando el trabajo de agricultores que cultivan con dedicación y compromiso.

Más que exportar productos, buscamos llevar al mundo el valor real del campo colombiano.

Somos más que un puente.

Somos la conexión que permite que el esfuerzo del agricultor sea reconocido.

Título: ¿Qué es +57 Productos?

contenido: Trabajamos directamente con agricultores para conectar su producción con compradores en el exterior, encargándonos de que todo el proceso sea claro, seguro y justo para ambas partes.

No buscamos solo intermediar.

Buscamos que el trabajo del agricultor sea valorado y que sus productos lleguen a donde realmente son reconocidos.

### MISIÓN

Conectar a los agricultores colombianos con compradores internacionales, garantizando un pago justo y exportaciones confiables.

### VISIÓN

Ser una de las principales impulsoras de productos colombianos en el mercado internacional, fortaleciendo el desarrollo del agricultor.

### Quién está detrás de esto

Detrás de +57 Productos hay personas comprometidas con hacer las cosas bien y con llevar el trabajo del campo colombiano más lejos.

Botón: Conoce el equipo

### VALORES CORPORATIVOS

1. Justicia
2. Honestidad
3. Responsabilidad
4. Transparencia
5. Compromiso Social
6. Respeto
7. Calidad
8. Adaptabilidad
9. Cumplimiento
10. Nobleza
---