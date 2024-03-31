/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	//output: 'export',
	// Config base path for GitHub pages repo
	//basePath: '/nextjs-github-pages',
	// https://nextjs.org/docs/app/api-reference/components/image#unoptimized
	distDir: 'out',
	images: {
		unoptimized: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
