Axys
Bienvenido al proyecto Axys. Este es un proyecto desarrollado con React y TypeScript. A continuación, se detallan las convenciones y buenas prácticas que utilizamos en este repositorio para un desarrollo limpio y escalable.

1. Convenciones de Nombres
Interfaces: Todas las interfaces se definirán utilizando la convención de nombres con una "i" minúscula al inicio ademas de ser para propiedades se le agrege al final "Props" y si es para pasar atributos se una "Attr" , por ejemplo, iUserProps, iProductAttr, etc.
Tipos vs Interfaces: En este proyecto, utilizamos interfaces en lugar de type para definir estructuras y objetos complejos. Esto se debe a que las interfaces ofrecen una mayor extensibilidad y compatibilidad con las clases.
Archivos .d.ts: Todas las interfaces se guardarán en archivos con la extensión .d.ts para una mejor organización y claridad. Estos archivos sirven para definir tipos globales y mejorar la legibilidad del código.
2. Ejemplo de Definición y Uso de Interfaces
A continuación, se muestra cómo se deben definir y exportar las interfaces en este proyecto.

Paso 1: Definir la Interfaz
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
Paso 2: Importar la Interfaz en los Componentes
Cuando necesites utilizar esta interfaz en un componente, simplemente importa la interfaz como se muestra a continuación:

```typescript
// User.tsx

import iUser from './types/user';

const User: React.FC<iUserProps> = () => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

export default User;
```
3. Reglas de Codificación
Nombrado de Archivos: Utilizamos el formato PascalCase para archivos de componentes (UserComponent.tsx) y camelCase para archivos auxiliares (userService.ts).
Funciones Flecha: Se prioriza el uso de funciones flecha para mantener la consistencia y aprovechar el contexto léxico de this.
Hooks: Todos los hooks personalizados deben empezar con el prefijo use, por ejemplo, useFetch, useAuth.
4. Configuración del Proyecto
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
5. Estructura del Proyecto
```plaintext
src/
├── components/
│   
├── hooks/
│
├── shared/
│   └── Text/
│        ├── text.d.ts
│        └── text.tsx
│   
└── App.tsx
```

7. Licencia
Este proyecto está bajo la licencia Axys. Consulta el archivo LICENSE para más detalles.


