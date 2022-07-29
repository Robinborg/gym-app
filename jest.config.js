module.exports = {
	moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
	transform: {
		  "\\.[jt]sx?$": "babel-jest",
	},
  testEnvironment: 'node',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'\\.(css|jpg|png)$': '<rootDir>/utils/empty-module.js'
	},
	testMatch: [
		'<rootDir>/**/*.test.(js|jsx|ts|tsx)', '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
	],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	verbose: true,
	setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
};
