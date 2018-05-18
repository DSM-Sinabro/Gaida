module.exports = {
    "env": {
        // "browser": true,
        // "commonjs": true,
        // "es6": true
        "node": true

    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2017,
    },
    "rules": {
        "no-undef":0,
        "no-console":0,
        // "indent": [
        //     "error",
        //     "tab"
        // ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};