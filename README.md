Axys
Bienvenido al proyecto Axys. Este es un proyecto desarrollado con React y TypeScript. A continuación, se detallan las convenciones y buenas prácticas que utilizamos en este repositorio para un desarrollo limpio y escalable.

1. Convenciones de Nombres
Interfaces: Todas las interfaces se definirán utilizando la convención de nombres con una "i" minúscula al inicio, por ejemplo, iUser, iProduct, etc.
Tipos vs Interfaces: En este proyecto, utilizamos interfaces en lugar de type para definir estructuras y objetos complejos. Esto se debe a que las interfaces ofrecen una mayor extensibilidad y compatibilidad con las clases.
Archivos .d.ts: Todas las interfaces se guardarán en archivos con la extensión .d.ts para una mejor organización y claridad. Estos archivos sirven para definir tipos globales y mejorar la legibilidad del código.
2. Ejemplo de Definición y Uso de Interfaces
A continuación, se muestra cómo se deben definir y exportar las interfaces en este proyecto.

Paso 1: Definir la Interfaz
Crea un archivo con el nombre de la interfaz seguido de .d.ts, por ejemplo, user.d.ts:

typescript
Copiar código
// user.d.ts

export default interface iUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
Paso 2: Importar la Interfaz en los Componentes
Cuando necesites utilizar esta interfaz en un componente, simplemente importa la interfaz como se muestra a continuación:

typescript
Copiar código
// UserComponent.tsx

import iUser from './types/user';

const UserComponent: React.FC<{ user: iUser }> = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

export default UserComponent;
3. Reglas de Codificación
Nombrado de Archivos: Utilizamos el formato PascalCase para archivos de componentes (UserComponent.tsx) y camelCase para archivos auxiliares (userService.ts).
Funciones Flecha: Se prioriza el uso de funciones flecha para mantener la consistencia y aprovechar el contexto léxico de this.
Hooks: Todos los hooks personalizados deben empezar con el prefijo use, por ejemplo, useFetch, useAuth.
4. Configuración del Proyecto
Para configurar el entorno y ejecutar el proyecto en tu máquina local, sigue los siguientes pasos:

bash
Copiar código
# Clona el repositorio
git clone https://github.com/tu-usuario/axys.git

# Navega al directorio del proyecto
cd axys

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
5. Estructura del Proyecto
plaintext
Copiar código
src/
├── components/
│   ├── UserComponent.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── hooks/
│   └── useFetch.ts
├── types/
│   ├── user.d.ts
│   └── product.d.ts
├── services/
│   └── userService.ts
└── App.tsx
6. Contribuir al Proyecto
Si deseas contribuir a Axys, por favor sigue estos pasos:

Realiza un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -m "Agrega nueva funcionalidad").
Sube los cambios a tu repositorio (git push origin feature/nueva-funcionalidad).
Abre un Pull Request en este repositorio.
7. Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.


