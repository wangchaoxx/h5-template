import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [VantResolver()],
    }),
    AutoImport({
      imports: [
        'vue',
      ],
      dts: true,
      vueTemplate: true,
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
      },
    }
  },
})
