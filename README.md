# Axys
#### Bienvenido al proyecto Axys. Este es un proyecto desarrollado con React y TypeScript. A continuación, se detallan las convenciones y buenas prácticas que utilizamos en este repositorio para un desarrollo limpio y escalable.

## 1. Convenciones de Nombres
- Interfaces: Todas las interfaces se definirán utilizando la convención de nombres con una "i" minúscula al inicio ademas de ser para propiedades se le agrege al final "Props" y si es para pasar atributos se una "Attr" , por ejemplo, iUserProps, iProductAttr, etc.
- Tipos vs Interfaces: En este proyecto, utilizamos interfaces en lugar de type para definir estructuras y objetos complejos. Esto se debe a que las interfaces ofrecen una mayor extensibilidad y compatibilidad con las clases.
- Archivos .d.ts: Todas las interfaces se guardarán en archivos con la extensión .d.ts para una mejor organización y claridad. Estos archivos sirven para definir tipos globales y mejorar la legibilidad del código.
## 2. Ejemplo de Definición y Uso de Interfaces
A continuación, se muestra cómo se deben definir y exportar las interfaces en este proyecto.

### Paso 1: Definir la Interfaz
Crea un archivo con el nombre de la interfaz seguido de .d.ts, por ejemplo, user.d.ts:

```typescript
// user.d.ts

 interface iUserProps {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

export default iUserprops;
```
### Paso 2: Importar la Interfaz en los Componentes
Cuando necesites utilizar esta interfaz en un componente, simplemente importa la interfaz como se muestra a continuación:

```typescript
// User.tsx

import iUser from './types/user';

export const User: React.FC<iUserProps> = () => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};
```
## 3 En Axys, seguimos una serie de convenciones de nombres para mantener la consistencia y legibilidad del código. Asegúrate de seguir estas reglas al añadir nuevos archivos, componentes e interfaces.

#### 1. Formato de Nombres para Archivos
Usamos snake_case para todos los nombres de archivos.
##### Ejemplos:
```plaintext
user_service.ts
user.tsx
app_config.json
api_client.ts
```
#### 2. Formato de Nombres para Componentes
Usamos PascalCase para los nombres de componentes de React.
##### Ejemplos:
```plaintext
UserCard
LoginForm
Header
```
#### 3. Formato de Nombres para Interfaces
Usamos camelCase para los nombres de interfaces.
##### Ejemplos:
```plaintext
iUser
iProduct
iAuthResponse
```
## 4. Configuración del Proyecto
Para configurar el entorno y ejecutar el proyecto en tu máquina local, sigue los siguientes pasos:

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/axys.git

# Navega al directorio del proyecto
cd axys

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```
## 5. Estructura del Proyecto
```plaintext
src
├── assets
│   ├── fonts
│   │   └── helvetica-compressed.otf
│   └── react.svg
├── header
│   ├── components
│   │   ├── Nav
│   │   │   ├── nav.css
│   │   │   ├── nav.d.ts
│   │   │   └── nav.tsx
│   │   └── NavItem
│   │       ├── nav_item.d.ts
│   │       └── nav_item.tsx
│   ├── header.d.ts
│   ├── header.tsx
│   └── hooks
│       └── use_marker.tsx
├── sections
│   └── choose_us
│       └── choose_us.tsx
├── shared
│   ├── Circle
│   │   ├── circle.d.ts
│   │   └── circle.tsx
│   ├── HR
│   │   ├── hr.d.ts
│   │   └── hr.tsx
│   ├── Line
│   │   ├── line.d.ts
│   │   └── line.tsx
│   ├── SectionEnd
│   │   ├── section_end.d.ts
│   │   └── section_end.tsx
│   ├── Text
│   │   ├── text.d.ts
│   │   └── text.tsx
│   └── Ticker
│       ├── ticker.css
│       ├── ticker.d.ts
│       └── ticker.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

# Convenciones de Commits

Para este proyecto, utilizaremos el estándar de **Conventional Commits**. A continuación, se detallan los prefijos y formatos que deben seguirse al realizar commits en el repositorio.

## Formato General

Cada commit debe seguir este formato:

<tipo>(<área>): <descripción breve>


### Descripción del Formato

- **`<tipo>`**: Tipo de cambio que estás realizando.
- **`<área>`**: Área del código afectada, como un archivo o componente específico.
- **`<descripción breve>`**: Una breve descripción de lo que hace el commit.
  - Usa un tono imperativo y en minúsculas (por ejemplo, "agrega", "corrige").
  - La descripción debe tener un máximo de 50 caracteres.

## Tipos de Commits

A continuación, se detallan los tipos de commits que puedes utilizar:

### 1. `feat`: Nuevas Funcionalidades
Usar cuando agregues una nueva característica o funcionalidad al proyecto.

feat(<componente>): agrega soporte para autenticación con JWT


### 2. `fix`: Corrección de Errores
Para la solución de errores y bugs.

fix(<módulo>): corrige error en el cálculo de totales


### 3. `docs`: Documentación
Cuando se actualiza o modifica la documentación del proyecto (README, comentarios, etc.).

docs(<archivo>): actualiza documentación de instalación en README


### 4. `style`: Estilos y Formato
Cambios que no afectan la lógica del código, como correcciones de estilo, formato, espacios, comas, etc.

style(<archivo>): ajusta identación y elimina espacios extra


### 5. `refactor`: Refactorización
Cambios en el código que no corrigen un bug ni agregan una funcionalidad, como mejoras en la estructura del código o limpieza.

refactor(<componente>): optimiza función de renderizado


### 6. `test`: Pruebas
Uso exclusivo para la creación o modificación de tests.

test(<servicio>): agrega pruebas unitarias para función de login


### 7. `chore`: Tareas Generales
Para tareas menores o que no afectan la lógica del código (actualización de dependencias, configuración, etc.).

chore(<dependencias>): actualiza versión de eslint a 8.0.0


### 8. `perf`: Mejoras de Rendimiento
Optimización de la aplicación en cuanto a rendimiento.

perf(<componente>): mejora eficiencia del renderizado en tabla de datos


### 9. `ci`: Integración Continua
Cambios en los archivos y scripts de configuración de CI (por ejemplo, GitHub Actions, CircleCI).

ci(<pipeline>): agrega script de despliegue para entorno de producción


### 10. `build`: Compilación y Dependencias
Cambios que afectan el sistema de compilación o las dependencias externas (como actualizar `webpack`, `gulp`, etc.).

build(<proyecto>): configura webpack para producción


### 11. `revert`: Revertir Cambios
Para revertir un commit anterior.

revert: revierte commit 1234abcd que causaba errores en producción


### Notas Adicionales
- Evita usar mensajes genéricos como `update` o `changes made`.
- Asegúrate de que cada commit sea pequeño y enfocado en un solo cambio.
- Usa **commits atómicos** para facilitar el seguimiento de cambios y posibles reversiones.

Esta guía te ayudará a mantener un historial de commits claro y comprensible para todos los colaboradores del proyecto.
