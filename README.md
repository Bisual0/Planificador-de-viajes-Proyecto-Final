# Planificador de viajes

Aplicación web para crear viajes, organizar destinos y actividades, y guardar lugares favoritos.

## Tecnologías

- Frontend: React + Vite
- Backend: Flask
- Base de datos: PostgreSQL + SQLAlchemy + Flask-Migrate
- Estado global: Context API con patrón Flux

## Requisitos locales

- Node.js y npm
- Python 3.13
- Pipenv
- PostgreSQL en ejecución

## Configuración inicial

### 1. Instalar dependencias

```bash
npm install
pipenv install
```

### 2. Configurar variables de entorno

Crea tu archivo local a partir del ejemplo:

```bash
cp .env.example .env
```

Edita `DATABASE_URL` para tu instalación de PostgreSQL. En Linux, si PostgreSQL permite usar el usuario local mediante socket Unix:

```env
DATABASE_URL=postgresql:///planificador_viajes_dev
```

Si tu instalación exige conexión TCP con contraseña, usa una URL con usuario y contraseña:

```env
DATABASE_URL=postgresql://TU_USUARIO:TU_CONTRASENA@localhost:5432/planificador_viajes_dev
```

> `.env` está ignorado por Git. No subas contraseñas, tokens ni claves al repositorio.

### 3. Crear la base de datos local

```bash
createdb planificador_viajes_dev
```

Si la base ya existe, PostgreSQL mostrará un aviso y puedes continuar.

### 4. Crear y aplicar migraciones

Cuando cambien los modelos en `src/api/models.py`:

```bash
pipenv run migrate
pipenv run upgrade
```

Para aplicar migraciones que ya existan:

```bash
pipenv run upgrade
```

### 5. Ejecutar la aplicación

En una terminal, inicia Flask:

```bash
pipenv run start
```

El backend queda disponible en `http://127.0.0.1:3001`.

En otra terminal, inicia Vite:

```bash
npm run dev
```

Vite mostrará la URL local del frontend, normalmente `http://localhost:3000`.

## Comprobaciones rápidas

```bash
npm run build
```

> `npm run lint` queda como tarea de calidad posterior. La configuración heredada de la plantilla aún genera errores en componentes ajenos a la funcionalidad actual.

La salud del backend estará disponible en:

```text
GET /api/health
```

## Destinos iniciales

Durante el MVP, los destinos disponibles inicialmente son:

- Valparaíso, Chile
- San José, Costa Rica
- Río de Janeiro, Brasil
- Buenos Aires, Argentina
- Lima, Perú

## Servicios externos seleccionados

Las siguientes decisiones se probaron localmente con laboratorios independientes antes de integrarlas en la funcionalidad principal.

| Necesidad | Servicio seleccionado | Uso acordado |
| --- | --- | --- |
| Buscar ciudades y obtener coordenadas | Nominatim / OpenStreetMap | Buscar ciudades o pueblos por texto y obtener nombre, país, latitud y longitud. |
| Buscar lugares cercanos | Overpass API / OpenStreetMap | Obtener puntos de interés filtrados por categoría dentro de un radio de 5 km. |
| Mostrar mapas | Leaflet + tiles de OpenStreetMap | Centrar mapas, mostrar marcadores, popups y la atribución obligatoria de OpenStreetMap. |

### Categorías y límites de lugares

Las categorías pueden elegirse de forma múltiple. Para reducir sobrecarga y manejar resultados parciales, la app agrupa las consultas de Overpass y aplica un límite por grupo:

| Grupo | Categorías | Límite por consulta |
| --- | --- | ---: |
| Turismo y cultura | Museos, miradores, parques y monumentos | 20 |
| Comida y vida nocturna | Restaurantes, cafeterías y bares | 30 |
| Alojamiento | Hoteles y hostales | 20 |

Cuando se seleccionan categorías de varios grupos, se realiza una consulta independiente y secuencial para cada grupo. Si una consulta falla o supera el tiempo de espera, los resultados de los demás grupos se conservan y la interfaz informa el grupo no disponible.

Los marcadores usan un color por categoría y muestran nombre, categoría, coordenadas e ID externo de OpenStreetMap. Los laboratorios de evaluación se mantienen en estas rutas del frontend:

```text
/lab/ciudades
/lab/lugares
/lab/mapa
/lab/mapa-lugares
```

> Las consultas directas a servicios públicos se usan únicamente para evaluación local. En la integración del MVP, Flask deberá controlar las consultas a Overpass, aplicar límites, tiempos de espera y caché.

## Modelo actual

El proyecto incluye los modelos `User`, `Trip`, `Destination`, `Activity`, `Place` y `Favorite`. Antes de implementar endpoints o pantallas, las modificaciones de los modelos deben ir acompañadas de su migración correspondiente.
