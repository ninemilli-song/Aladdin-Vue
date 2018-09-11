module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "prefer-const": 0, 
        "no-const-assign": 0
    },
    "settings": {
        "import/resolve": {
            "moduleDirectory": [
                "src"
            ]
        }
    },
};