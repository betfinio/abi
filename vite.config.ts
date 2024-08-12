import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';

export default defineConfig({
	plugins: [dts({ include: ['lib'] })],
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, 'lib/index.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			input: Object.fromEntries(
				glob
					.sync('lib/**/*.{ts,tsx}')
					.map((file) => [relative('lib', file.slice(0, file.length - extname(file).length)), fileURLToPath(new URL(file, import.meta.url))]),
			),
			output: {
				assetFileNames: 'assets/[name][extname]',
				entryFileNames: '[name].js',
			},
		},
	},
});
