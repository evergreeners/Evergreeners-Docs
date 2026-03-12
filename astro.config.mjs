// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Evergreeners Docs',
			logo: {
				src: './src/assets/logo.png',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			favicon: '/favicon.png',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/evergreeners/evergreeners' }
			],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Overview', slug: 'introduction/overview' },
						{ label: 'Philosophy', slug: 'introduction/philosophy' },
						{ label: 'Why Evergreeners Exists', slug: 'introduction/why-exists' },
					],
				},
				{
					label: 'Getting Started',
					items: [
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Local Development', slug: 'getting-started/local-development' },
						{ label: 'Connecting GitHub', slug: 'getting-started/connecting-github' },
						{ label: 'First Commit', slug: 'getting-started/first-commit' },
					],
				},
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Consistency Garden', slug: 'core-concepts/consistency-garden' },
						{ label: 'Contribution Heatmap', slug: 'core-concepts/contribution-heatmap' },
						{ label: 'Streak System', slug: 'core-concepts/streak-system' },
						{ label: 'Quests', slug: 'core-concepts/quests' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Maintaining Streaks', slug: 'guides/maintaining-streaks' },
						{ label: 'Using Quests', slug: 'guides/using-quests' },
						{ label: 'Contributing', slug: 'guides/contributing' },
						{ label: 'Customizing Your Profile', slug: 'guides/customizing-profile' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'API', slug: 'reference/api' },
						{ label: 'Database Schema', slug: 'reference/database-schema' },
						{ label: 'Authentication', slug: 'reference/authentication' },
						{ label: 'Environment Variables', slug: 'reference/environment-variables' },
						{ label: 'Architecture', slug: 'reference/architecture' },
					],
				},
				{
					label: 'Open Source',
					items: [
						{ label: 'Contributing Guide', slug: 'open-source/contributing-guide' },
						{ label: 'Code of Conduct', slug: 'open-source/code-of-conduct' },
						{ label: 'Roadmap', slug: 'open-source/roadmap' },
						{ label: 'Changelog', slug: 'open-source/changelog' },
					],
				},
			],
		}),
	],
});
