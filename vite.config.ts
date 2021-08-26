import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
import { VTextResolver } from '@0x-jerry/v-text/vite-components-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [VTextResolver()],
      globalComponentsDeclaration: true,
    }),
    WindiCSS({
      config: {
        attributify: true,
      },
    }),
  ],
})
