const path = require("path");
const { HOME_URL } = process.env;

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
		prependData: `
			@use "sass:math";
			@import "mixins"; 
			`,
	},
	async rewrites() {
		return [
			{
				source: "/:path*",
				destination: `/:path*`,
			},
			{
				source: "/home",
				destination: `${HOME_URL}/home`,
			},
			{
				source: "/home/:path*",
				destination: `${HOME_URL}/home/:path*`,
			},
		];
	},
};
