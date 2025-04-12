# Inmotech API Documentation

## Base URL
```http
http://localhost:5000/api

## Authentication Endpoints
### Register User
```http
POST /auth/registro
 ```

Request Body:

```json
{
    "nombre": "string",
    "email": "string",
    "password": "string",
    "rol": "string" // "admin" or "usuario"
}
 ```

### Login
```http
POST /auth/login
 ```

Request Body:

```json
{
    "email": "string",
    "password": "string"
}
 ```

## Properties Endpoints
### Get All Properties
```http
GET /properties
 ```

### Get Property by ID
```http
GET /properties/:id
 ```

### Create Property (Requires Auth)
```http
POST /properties
 ```

Request Body:

```json
{
    "titulo": "string",
    "descripcion": "string",
    "precio": "number",
    "ubicacion": "string",
    "habitaciones": "number",
    "banos": "number",
    "area": "number",
    "garajes": "number",
    "tipoPropiedad": "string",
    "imagen": "string",
    "caracteristicas": ["string"]
}
 ```

### Update Property (Requires Auth)
```http
PUT /properties/:id
 ```

### Delete Property (Requires Auth)
```http
DELETE /properties/:id
 ```

```plaintext

And for the frontend:

```markdown:c%3A%5CUsers%5Cjonat%5COneDrive%5CDesktop%5Cfs%5Cinmotech_fs%5Cfrontend-docs.md
# Inmotech Frontend Documentation

## Project Structure

 ```
```

frontend/
├── src/
│   ├── components/
│   │   ├── admin/         # Admin-specific components
│   │   └── common/        # Shared components
│   ├── pages/
│   │   ├── admin/         # Admin pages
│   │   └── public/        # Public pages
│   ├── services/          # API services
│   └── styles/            # CSS styles

```plaintext

## Routes

### Public Routes
- `/` - Authentication page
- `/inicio` - Home page
- `/inmuebles` - Properties listing
- `/inmueble/:id` - Property details
- `/buscar` - Search properties
- `/contacto` - Contact page
- `/sobrenosotros` - About us
- `/faq` - FAQ page

### Admin Routes
- `/admin` - Admin dashboard
- `/admin/inmuebles` - Property management
- `/admin/inmuebles/crear` - Create property
- `/admin/inmuebles/editar/:id` - Edit property
- `/admin/visualizaciones` - Analytics

## Components

### Admin Components
- `AdminLayout` - Admin panel layout wrapper
- `CreateProperty` - Property creation form
- `EditProperty` - Property editing form
- `PropertyList` - Properties management list

### Common Components
- `Navigation` - Main navigation bar
- `Footer` - Site footer
- `PropertyCard` - Property display card

## Services

### Authentication Service
- `login(credentials)` - User login
- `registro(userData)` - User registration

### Property Service
- `getAllProperties()` - Fetch all properties
- `createProperty(propertyData)` - Create new property
- `updateProperty(id, propertyData)` - Update property
- `deleteProperty(id)` - Delete property
 ```
```