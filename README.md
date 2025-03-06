# TestProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Storybook

Para ejecutar Storybook localmente:

```bash
npm run storybook
```

Esto iniciará Storybook en el puerto 6600. Navega a `http://localhost:6600/` para ver la biblioteca de componentes.

## Despliegue en Railway

Este proyecto está configurado para desplegar Storybook en Railway. Para desplegar:

1. Asegúrate de tener una cuenta en [Railway](https://railway.app/)
2. Antes de desplegar, ejecuta localmente:

   ```bash
   npm install
   ```

   Esto actualizará el package-lock.json con todas las dependencias necesarias.

3. Sube los cambios a tu repositorio Git
4. En Railway, crea un nuevo proyecto desde tu repositorio Git
5. Railway utilizará automáticamente la configuración en `railway.json`, `nixpacks.toml` y `Procfile` para construir y servir Storybook

Alternativamente, puedes usar la CLI de Railway:

1. Instala la CLI: `npm install -g @railway/cli`
2. Inicia sesión: `railway login`
3. Vincula tu proyecto: `railway link`
4. Despliega: `railway up`

Railway utilizará Node.js 20 (especificado en nixpacks.toml) para evitar problemas de compatibilidad con las dependencias y expondrá Storybook a través de una URL pública.
