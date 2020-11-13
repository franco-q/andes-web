/* eslint-env node */

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path')

module.exports = {
	pathPrefix: '/dev',
	siteMetadata: {
		title: `Gatsby GSAP`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-PWCGM29',
				includeInDevelopment: true
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/
				}
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				includePaths: [require('path').resolve(__dirname, 'node_modules'), 'src', 'src/styles'],
				cssLoaderOptions: {
					camelCase: false
				}
			}
		},
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				'@src': path.join(__dirname, 'src'),
				'@components': path.join(__dirname, 'src/components'),
				'@pages': path.join(__dirname, 'src/pages'),
				'@styles': path.join(__dirname, 'src/styles'),
				'@utils': path.join(__dirname, 'src/utils')
			}
		}
	]
}
