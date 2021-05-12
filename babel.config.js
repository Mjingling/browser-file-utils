module.exports = {
    "presets": [
        ["@babel/preset-env", {
            "targets": "> 0.25%, not dead",
            "useBuiltIns": "usage",
            "debug": false,
            "corejs": 3 // 指定 runtime-corejs 的版本，目前有 2 3 两个版本
        }]
    ],
    "plugins": [
        [
        "@babel/plugin-transform-runtime"
        ]
    ]
}