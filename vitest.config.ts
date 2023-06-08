/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    globals: true
  }
})