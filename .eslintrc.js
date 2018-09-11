module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
        "amd": ture,                     // - defines require() and define() as global variables as per the amd spec
        "jquery": true                  // jQuery global variables.
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
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
        "no-const-assign": 0,
        'vue/no-unused-vars': 'error',
        'no-console': 0
    },
    "settings": {
        "import/resolve": {
            "moduleDirectory": [
                "src"
            ]
        }
    },
};