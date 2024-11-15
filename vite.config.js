import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_ADMIN_EMAILS: JSON.stringify(process.env.VITE_ADMIN_EMAILS),
      VITE_ADMIN_PASSWORDS: JSON.stringify(process.env.VITE_ADMIN_PASSWORDS),
      MONGO_URI: JSON.stringify(process.env.MONGO_URI),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: 'index.html',
    },
  },
  server: {
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://103.198.165.140:5000/api/submit',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
