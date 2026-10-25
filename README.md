# 🚨 Disaster Predictor 🌍

<p align="center">
  <strong>Aplicación web de detección, predicción y mitigación de desastres asociados a El Niño en Bolivia.</strong><br />
  <em>Web app for detection, prediction and mitigation of El Niño related disasters in Bolivia.</em>
</p>

<p align="center">
  <img alt="Astro" src="https://img.shields.io/badge/Astro-SSR-BC52EE?style=for-the-badge&logo=astro&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-islands-149ECA?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Leaflet" src="https://img.shields.io/badge/Leaflet-mapas-199900?style=for-the-badge&logo=leaflet&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="Cloudflare" src="https://img.shields.io/badge/Cloudflare-adapter-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" />
</p>

---

## ✨ ¿Qué es?

**Disaster Predictor** es la aplicación web de mi tesis de Ingeniería de Sistemas, *"Sistema de Detección, Predicción y Mitigación de Incidentes de Desastres Naturales mediante el Uso de Redes Neuronales"*. Muestra las predicciones de una red neuronal, las ubica en un mapa y le da a las autoridades y a los expertos un lugar para gestionar los desastres y sus acciones de mitigación.

La red neuronal no vive en este repositorio: la aplicación la consulta a través de una API externa, cuya URL se configura con `PUBLIC_NEURAL_NETWORK_API_URL`.

## 🧩 Funcionalidades

### 🌐 Sitio público
- **Mapa interactivo de La Paz** con [Leaflet](https://leafletjs.com/) y un GeoJSON de la ciudad.
- **Predicciones**: las más recientes en la portada y el listado completo en su propia página.
- **Detecciones y mitigaciones** con avisos emergentes y sonido de alarma.
- Páginas de detalle de cada **tipo de desastre** y de cada **acción de mitigación**.
- Sección **"Cómo funciona"** paso a paso, página **"Acerca de"** y **formulario de contacto**, cuyos mensajes quedan guardados.

### 🛡️ Paneles de gestión
- Inicio de sesión con dos roles: **administrador** y **experto**.
- Crear, editar y activar o desactivar:
  - **Tipos de desastre**
  - **Acciones de mitigación**
  - **Desastres reales** ocurridos
- El administrador además gestiona **usuarios** y lee los **mensajes de contacto**.

## 🧱 Stack

| Capa | Herramientas |
| --- | --- |
| Framework | [Astro](https://astro.build/) en modo servidor, islas de React |
| Base de datos | [Astro DB](https://docs.astro.build/en/guides/astro-db/) (libSQL) |
| Mapas | Leaflet y react-leaflet |
| Estilos y animación | Tailwind CSS, Framer Motion, SweetAlert2 |
| Autenticación | `auth-astro` (Auth.js), `bcryptjs` |
| Despliegue | Adaptador de Cloudflare |
| Lenguaje | TypeScript |

## 🗂️ Estructura

```text
db/                  Tablas de Astro DB y datos semilla (roles, usuarios, desastres, mitigaciones)
public/              Sonido de alarma y recursos estáticos
src/
├── actions/         Astro Actions: desastres, mitigaciones, desastres reales, usuarios, contacto
├── modules/         Interfaz por área: home, admin, expert, auth, how-it-works, shared
├── pages/           Rutas públicas, /admin y /expert
├── utils/           Consulta de predicciones y utilidades
└── middleware.ts    Protección de rutas por rol
```

## 🚀 Inicio rápido

### Requisitos
- Node.js 18.17 o superior
- La URL de la API de la red neuronal, si quieres ver predicciones

### Instalación

```bash
git clone https://github.com/pxnditxyr/disaster-predictor.git
cd disaster-predictor
npm install
cp .example.env .env
npm run dev
```

Abre `http://localhost:4321`. En desarrollo, Astro DB corre en local y carga los datos semilla de `db/seed.ts`.

### Variables de entorno

| Variable | Para qué sirve |
| --- | --- |
| `AUTH_SECRET` | Secreto con el que Auth.js firma las sesiones |
| `AUTH_TRUST_HOST` | Pon `true` detrás de un proxy o en Cloudflare |
| `ASTRO_DB_REMOTE_URL` / `ASTRO_DB_APP_TOKEN` | Base de datos remota, para `dev:remote` y `build` |
| `PUBLIC_NEURAL_NETWORK_API_URL` | URL base de la API de la red neuronal |

### Scripts

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con base de datos local |
| `npm run dev:remote` | Servidor de desarrollo con la base de datos remota |
| `npm run build` | Compila contra la base de datos remota |
| `npm run preview` | Vista previa de la compilación |

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🧑‍💻 Autor

Creado por [Pxndxs](https://github.com/pxnditxyr) 🐼
