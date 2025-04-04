module.exports = {
	"parserOptions": {
		"ecmaVersion": 6
	},
	"env": {
		"es6": true,
		"browser": true,
		"worker": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"rules": {
		"accessor-pairs": "error",
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": [
			"error",
			"never"
		],
		"array-callback-return": "error",
		"array-element-newline": "off",
		"arrow-body-style": "error",
		"arrow-parens": "error",
		"arrow-spacing": "error",
		"block-scoped-var": "error",
		"block-spacing": "error",
		"brace-style": "off",
		"callback-return": "error",
		"camelcase": ["error", {"properties": "never"}],
		"capitalized-comments": "off",
		"class-methods-use-this": "error",
		"comma-dangle": "off",
		"comma-spacing": "off",
		"comma-style": [
			"error",
			"last"
		],
		"complexity": "off",
		"computed-property-spacing": [
			"error",
			"never"
		],
		"consistent-return": "off",
		"consistent-this": "off",
		"curly": "off",
		"default-case": "error",
		"dot-location": "error",
		"dot-notation": "error",
		"eol-last": "error",
		"eqeqeq": "error",
		"for-direction": "error",
		"func-call-spacing": "error",
		"func-name-matching": "error",
		"func-names": [
			"error",
			"never"
		],
		"func-style": "off",
		"function-paren-newline": "off",
		"generator-star-spacing": "error",
		"getter-return": "error",
		"global-require": "off",
		"guard-for-in": "off",
		"handle-callback-err": "error",
		"id-blacklist": "error",
		"id-length": "off",
		"id-match": "error",
		"implicit-arrow-linebreak": "error",
		"indent": [
			"error",
			"tab"
		],
		"indent-legacy": "off",
		"init-declarations": "off",
		"jsx-quotes": "error",
		"key-spacing": "error",
		"keyword-spacing": "off",
		"line-comment-position": "off",
		"linebreak-style": [
			"error",
			"unix"
		],
		"lines-around-comment": "off",
		"lines-around-directive": "off",
		"lines-between-class-members": "error",
		"max-depth": "off",
		"max-len": "off",
		"max-lines": "off",
		"max-nested-callbacks": "error",
		"max-params": "off",
		"max-statements": "off",
		"max-statements-per-line": "off",
		"multiline-comment-style": "off",
		"multiline-ternary": [
			"error",
			"always-multiline"
		],
		"new-parens": "error",
		"newline-after-var": "off",
		"newline-before-return": "off",
		"newline-per-chained-call": "off",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-await-in-loop": "error",
		"no-bitwise": "error",
		"no-buffer-constructor": "error",
		"no-caller": "error",
		"no-catch-shadow": "off",
		"no-cond-assign": [
			"error",
			"except-parens"
		],
		"no-confusing-arrow": "error",
		"no-console": "off",
		"no-continue": "off",
		"no-div-regex": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "off",
		"no-empty": ["error", {"allowEmptyCatch": true}],
		"no-empty-function": "off",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-extra-parens": "off",
		"no-floating-decimal": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-inline-comments": "off",
		"no-inner-declarations": [
			"error",
			"functions"
		],
		"no-invalid-this": "off",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-magic-numbers": "off",
		"no-mixed-operators": "off",
		"no-mixed-requires": "error",
		"no-multi-assign": "error",
		"no-multi-spaces": "off",
		"no-multi-str": "error",
		"no-multiple-empty-lines": "off",
		"no-native-reassign": "error",
		"no-negated-condition": "off",
		"no-negated-in-lhs": "error",
		"no-nested-ternary": "off",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "off",
		"no-path-concat": "off",
		"no-plusplus": "off",
		"no-process-env": "error",
		"no-process-exit": "error",
		"no-proto": "error",
		"no-prototype-builtins": "error",
		"no-restricted-globals": "error",
		"no-restricted-imports": "error",
		"no-restricted-modules": "error",
		"no-restricted-properties": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": "off",
		"no-shadow-restricted-names": "error",
		"no-spaced-func": "error",
		"no-sync": ["error", {"allowAtRootLevel": true}],
		"no-tabs": "off",
		"no-template-curly-in-string": "error",
		"no-ternary": "off",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-undefined": "off",
		"no-underscore-dangle": "off",
		"no-unmodified-loop-condition": "off",
		"no-unneeded-ternary": "error",
		"no-unused-expressions": "off",
		"no-unused-vars": ["error", {"args": "none"}],
		"no-use-before-define": "off",
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-useless-return": "off",
		"no-var": "off",
		"no-void": "error",
		"no-warning-comments": "error",
		"no-whitespace-before-property": "error",
		"no-with": "error",
		"nonblock-statement-body-position": [
			"error",
			"any"
		],
		"object-curly-newline": ["error", {"consistent": true}],
		"object-curly-spacing": "off",
		"object-shorthand": "off",
		"one-var": "off",
		"one-var-declaration-per-line": "off",
		"operator-assignment": [
			"error",
			"always"
		],
		"operator-linebreak": "off",
		"padded-blocks": "off",
		"padding-line-between-statements": "error",
		"prefer-arrow-callback": "off",
		"prefer-const": "error",
		"prefer-destructuring": "off",
		"prefer-numeric-literals": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-reflect": "off",
		"prefer-rest-params": "off",
		"prefer-spread": "error",
		"prefer-template": "off",
		"quote-props": "off",
		"quotes": "off",
		"radix": [
			"error",
			"as-needed"
		],
		"require-await": "error",
		"require-jsdoc": "off",
		"rest-spread-spacing": "error",
		"semi": "error",
		"semi-spacing": "error",
		"semi-style": [
			"error",
			"last"
		],
		"sort-imports": "error",
		"sort-keys": "off",
		"sort-vars": "off",
		"space-before-blocks": "error",
		"space-before-function-paren": [
			"error",
			"never"
		],
		"space-in-parens": [
			"error",
			"never"
		],
		"space-infix-ops": "error",
		"space-unary-ops": [
			"error",
			{
				"nonwords": false,
				"words": false
			}
		],
		"spaced-comment": "off",
		"strict": "off",
		"switch-colon-spacing": "error",
		"symbol-description": "error",
		"template-curly-spacing": "error",
		"template-tag-spacing": "error",
		"unicode-bom": [
			"error",
			"never"
		],
		"valid-jsdoc": "off",
		"vars-on-top": "off",
		"wrap-iife": "off",
		"wrap-regex": "off",
		"yield-star-spacing": "error",
		"yoda": "off"
	}
};