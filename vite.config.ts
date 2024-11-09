import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    // eslintPlugin({
    //   failOnWarning: false,
    //   failOnError: true,
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@domain': path.resolve(__dirname, 'src/domain'),
      '@infrastructure': path.resolve(__dirname, 'src/infrastructure'),
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@assets': path.resolve(__dirname, 'src/ui/assets'),
      '@components': path.resolve(__dirname, 'src/ui/components'),
      '@views': path.resolve(__dirname, 'src/ui/views'),
      '@usecases': path.resolve(__dirname, 'src/usecases'),
    },
  },
});
