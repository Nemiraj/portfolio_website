import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/portfolio_website/',  // Ensure this matches your repository name
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
