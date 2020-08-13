// conf.js


require("babel-register")({
    presets: ["env"]
})
exports.config = {
    framework: 'jasmine',
    specs: ['./spec1.js'],
    directConnect: true,
}