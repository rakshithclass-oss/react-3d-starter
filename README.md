# Forma — React 3D Landing Page

A responsive one-page website built with **React**, **Vite**, **Three.js**, **React Three Fiber**, and **Drei**.

## Run locally

1. Install Node.js (LTS).
2. Extract this folder and open it in VS Code.
3. Open a terminal in this folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Customise it

- **Main content:** `src/App.jsx`
- **Colours, layout and responsive design:** `src/styles.css`
- **3D object, lights and interaction:** `src/components/OrbScene.jsx`
- **Page title and fonts:** `index.html`

The 3D object can be dragged with the mouse or touch. Use the **Motion on/off** control to pause automatic motion.

> The navigation's “Say hello” link currently uses `hello@example.com`; replace it with your own email address in `src/App.jsx`.


## Deploy to Vercel

- Push this project to GitHub without `node_modules` or `dist` (they are excluded by `.gitignore`).
- Import the repository in Vercel and select the Vite framework preset.
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The build script invokes Vite through Node directly to avoid shell execute-permission issues with `node_modules/.bin/vite`. The `allowScripts` entry approves the esbuild 0.28.2 install script reported by npm. Review package install scripts before approving dependencies.
