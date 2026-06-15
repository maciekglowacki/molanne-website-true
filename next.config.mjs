/** @type {import('next').NextConfig} */
const nextConfig = {
	// The following environment variables can be safely exposed to the public bundle.
	// The Storyblok public access token is required for features like live preview.
	env: {
		STORYBLOK_DELIVERY_API_TOKEN: process.env.STORYBLOK_DELIVERY_API_TOKEN,
		STORYBLOK_API_BASE_URL: process.env.STORYBLOK_API_BASE_URL,
		STORYBLOK_REGION: process.env.STORYBLOK_REGION,
	},

	// Add response headers to allow Storyblok's visual editor to embed the site.
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						// Allow self and Storyblok editor/app subdomains to frame the page
						value: "frame-ancestors 'self' https://*.storyblok.com https://app.storyblok.com https://editor.storyblok.com;",
					},
				],
			},
		];
	},
};

export default nextConfig;
