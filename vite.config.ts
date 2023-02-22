/// <reference types="vitest" />

import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      outputDir: './dist/types',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/config/setup.ts',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'cookie-management',
      fileName: 'cookie-management',
    },
  },
})
