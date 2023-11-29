import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'FLL Docs',
			social: {
				github: 'https://github.com/KSHS-Robotics-Club',
			},
			sidebar: [
				{
					label: 'Docs',
					autogenerate: { directory: 'docs' },
				},
			],
		}),
	],
});
