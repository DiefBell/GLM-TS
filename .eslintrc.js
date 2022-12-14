/** @type {import("eslint").Linter.Config} */
module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2022,
		sourceType: "module",
		project: ["./tsconfig.json"]
	},
	plugins: [
		"@typescript-eslint",
	],
    extends: [
		"eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
	ignorePatterns: [
		"jest.config.js"
	],
    rules: {
		"@typescript-eslint/ban-ts-comment": "off",
        "prefer-const": "warn",
        "@typescript-eslint/no-inferrable-types": "warn",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-empty-function": "off",
		"brace-style": "off",
		"@typescript-eslint/brace-style": [ "error", "allman", { "allowSingleLine": true } ],
		"semi": "off",
		"@typescript-eslint/semi": "error",
		"eol-last": "error"
    }
};
