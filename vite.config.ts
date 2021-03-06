import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    base: '/',
    server: {
      port: Number(process.env.VITE_PORT),
      open: true
    },
    build: {
      sourcemap: true
    },
    plugins: [tsconfigPaths(), react(), svgr()]
  }
})
