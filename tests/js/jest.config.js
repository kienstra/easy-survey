module.exports = {
	rootDir: '../../',
	...require( '@wordpress/scripts/config/jest-unit.config' ),
	transform: {
		'^.+\\.[jt]sx?$': '<rootDir>/node_modules/@wordpress/scripts/config/babel-transform',
	},
	testEnvironment: 'jest-environment-jsdom-sixteen',
	testPathIgnorePatterns: [
		'<rootDir>/.git',
		'<rootDir>/node_modules',
	],
	transformIgnorePatterns: [
		'node_modules/(?!@wordpress/blocks/src/store)',
	],
};
