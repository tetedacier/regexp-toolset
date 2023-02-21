import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { externals } from 'rollup-plugin-node-externals';

const config = defineConfig({
  build: {
    reportCompressedSize: true,
    lib: {
      entry: './src/index.ts',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    dts({
      noEmitOnError: true,
    }),
    {
      ...externals(),
      enforce: 'pre',
    },
  ],
});

export default config;
