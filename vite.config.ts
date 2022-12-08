import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { svgstore } from './src/vite_plugins/svgstore';
import styleImport, { VantResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgstore(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      transformOn: true,
      mergeProps: true
    }),
    styleImport({
      resolves: [VantResolve()]
    }),
  ],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://121.196.236.94:3000/',
      }
    }
  }
})


