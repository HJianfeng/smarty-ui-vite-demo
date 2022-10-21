import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import vueJsx from '@vitejs/plugin-vue-jsx';
// https://vitejs.dev/config/*

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue'
    },
    assetFileNames: `style.[ext]`
  }
};

export default defineConfig({
  plugins: [vue(),vueJsx()],
  build: {
    rollupOptions,
    minify:false,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["esm", "umd","iife"],
    },
  }
});