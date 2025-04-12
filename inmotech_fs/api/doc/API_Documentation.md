# Documentación de la API de InmoTech

## URL Base
- http://localhost:3000/api

## Autenticación
- **Autorización**: Token Bearer

## Endpoints

### Módulos
- **GET /modules**
  - Descripción: Recuperar todos los módulos.
  - Autorización: Requerida

- **POST /modules**
  - Descripción: Crear un nuevo módulo.
  - Autorización: Requiere Admin
  - Parámetros del cuerpo:
    - `nombre`: string, requerido
    - `ruta`: string, opcional
    - `descripcion`: string, opcional

- **PUT /modules/:id**
  - Descripción: Actualizar un módulo existente.
  - Autorización: Requiere Admin
  - Parámetros de URL:
    - `id`: integer, requerido

- **DELETE /modules/:id**
  - Descripción: Eliminar un módulo.
  - Autorización: Requiere Admin
  - Parámetros de URL:
    - `id`: integer, requerido

- **POST /modules/assign-role**
  - Descripción: Asignar un rol a un módulo.
  - Autorización: Requiere Admin
  - Parámetros del cuerpo:
    - `moduleId`: integer, requerido
    - `roleId`: integer, requerido

- **POST /modules/assign-permission**
  - Descripción: Asignar un permiso a un módulo.
  - Autorización: Requiere Admin
  - Parámetros del cuerpo:
    - `moduleRoleId`: integer, requerido
    - `permitionId`: integer, requerido

- **GET /modules/:moduleId/roles**
  - Descripción: Recuperar roles de un módulo.
  - Autorización: Requerida
  - Parámetros de URL:
    - `moduleId`: integer, requerido

- **GET /modules/:moduleRoleId/permissions**
  - Descripción: Recuperar permisos de un rol de módulo.
  - Autorización: Requerida
  - Parámetros de URL:
    - `moduleRoleId`: integer, requerido

- **DELETE /modules/remove-role**
  - Descripción: Eliminar un rol de un módulo.
  - Autorización: Requiere Admin
  - Parámetros del cuerpo:
    - `moduleId`: integer, requerido
    - `roleId`: integer, requerido

- **DELETE /modules/remove-permission**
  - Descripción: Eliminar un permiso de un rol de módulo.
  - Autorización: Requiere Admin
  - Parámetros del cuerpo:
    - `moduleRoleId`: integer, requerido
    - `permitionId`: integer, requerido

## Información Adicional
- Asegúrate de que todas las solicitudes incluyan los encabezados de autorización apropiados.
- Para las solicitudes POST y PUT, asegúrate de que el cuerpo esté en formato JSON.