import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from "vite-plugin-env-compatible";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig( {
  plugins: [ react(), envCompatible() ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src' ),
    },
  },
} )
