const { CAREERS_URL } = process.env;

module.exports = {
	async rewrites() {
		return [
			{
				source: "/:path*",
				destination: `/:path*`,
			},
			{
				source: "/careers",
				destination: `${CAREERS_URL}/`,
			},
			{
				source: "/careers/:path*",
				destination: `${CAREERS_URL}/careers/:path*`,
			},
		];
	},
};
