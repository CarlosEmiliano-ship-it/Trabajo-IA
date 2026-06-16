import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Trabajo-IA/', // <- ¡Obligatorio para que GitHub Pages encuentre tus archivos!
  build: {
    outDir: 'docs',     // <- Le dice a Vite que guarde la app lista en una carpeta llamada docs
  },
})
