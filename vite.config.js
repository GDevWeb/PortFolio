import VitePluginScss from 'vite-plugin-scss';

export default {
  plugins: [VitePluginScss()],
  esbuildOptions: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    jsxInject: 'import React from "react"',
  },
};
