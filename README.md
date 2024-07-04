# PetShop Template - Vite + React + TypeScript + TailwindCss# tienda-mascotas-template

Template de tienda de mascotas creado con Vite, React, TypeScript y TailwindCss

## ¿Como usarlo?

1. Copia el repositorio

```bash
    git clone "https://github.com/YoAlejoDev/tienda-mascotas-template.git"
```

2. Instala las dependencias

```bash
    cd tienda-mascotas-template
    pnpm install
    pnpm install -D tailwindcss 
    npx init tailwindcss
```

3. Ve a `tailwind.config.js` y remplaza todo el archivo por

```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
```

## ¿Quieres colaborar?

- Estare atento a las PR que hagan para poder ayudar a este proyecto :D