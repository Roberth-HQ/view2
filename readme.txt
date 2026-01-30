git init
git add .
git commit -m "Proyecto React con Vite"
git remote add origin https://github.com/USUARIO/nombre del proyecto.git
git branch -M main
git push -u origin main
2---------------------
vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nombre del proyecto/'
})
3-------------------
npm install --save-dev gh-pages
4-------------------
packege.json
"homepage": "https://USUARIO.github.io/NOMBRE DEL PROYECTO",
EN SCRIPTS
"deploy": "gh-pages -d dist"
5-------------------------------
NPM RUN BUILD
NPM RUN deploy

LISTO!
