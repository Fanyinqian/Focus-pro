module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: true } }],
        '@babel/preset-typescript',
    ],
    "env": {
        "test": {
            "plugins": ["@babel/plugin-transform-modules-commonjs"]
        }
    }
};