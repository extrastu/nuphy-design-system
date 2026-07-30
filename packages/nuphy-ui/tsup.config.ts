import { defineConfig } from 'tsup'
import { preserveDirectivesPlugin } from 'esbuild-plugin-preserve-directives'

export default defineConfig({
  // Compile every source file to its own output (no bundling) so each
  // file's "use client" directive survives — required for Next.js RSC.
  entry: ['src/**/*.{ts,tsx}'],
  format: ['esm'],
  dts: true,
  clean: true,
  bundle: false,
  splitting: false,
  esbuildPlugins: [
    preserveDirectivesPlugin({
      directives: ['use client', 'use server'],
      include: /\.(js|ts|jsx|tsx)$/,
      exclude: /node_modules/,
    }),
  ],
  external: ['react', 'react-dom', 'lucide-react'],
})
