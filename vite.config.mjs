import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'EliasVuetify',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue', 'vuetify', 'pinia'],
      output: {
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify',
          pinia: 'Pinia'
        }
      }
    }
  }
})
