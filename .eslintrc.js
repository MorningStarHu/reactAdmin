module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        semi: [2, 'never'],
        'comma-dangle': [2, 'never'],
        "arrow-body-style": [0],
        "object-curly-newline": [0],
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx']
            }
        ]
    }
};
