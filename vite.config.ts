import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { svgstore } from './src/vite_plugins/svgstore';
import styleImport, { VantResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Sky-note/dist/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: any) {
          if (id.includes('echarts')) {
            return 'echarts';
          }
          if (id.includes('mock') || id.includes('faker')) {
            return 'mock';
          }
          if (id.includes('vant')) {
            return 'vant';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
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


