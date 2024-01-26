import { defineConfig } from 'vite';
import VitePluginScss from 'vite-plugin-scss';

export default {
  plugins: [VitePluginScss()],
  esbuildOptions: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    jsxInject: 'import React from "react"',
  },
  resolve: {
    alias: {
      "@sass": new URL('src/sass', import.meta.url).pathname,
    },
  },
};
