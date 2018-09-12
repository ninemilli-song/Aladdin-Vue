module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
        "amd": true,                     // - defines require() and define() as global variables as per the amd spec
        "jquery": true                  // jQuery global variables.
    },
    "extends": [
        "eslint:recommended",
        "airbnb-base",
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
        "prefer-const": 0, 
        "no-const-assign": 0,
        'vue/no-unused-vars': 'error',
        'no-console': 0,
        'linebreak-style':0,
        "comma-dangle": "never",
        "indent": [
            2, 
            4, 
            {
                "SwitchCase": 1
            }
        ],
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "ignore"
        }],
        "prefer-destructuring": ["error", {"object": false, "array": false}]
    },
    "settings": {
        "import/resolve": {
            "moduleDirectory": [
                "src"
            ]
        }
    },
};