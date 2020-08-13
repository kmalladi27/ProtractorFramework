// conf.js


require("babel-register")({
    presets: ["env"]
})
exports.config = {
    framework: 'jasmine',
    specs: ['/Users/krishnamalladi/protractor-test/specs/spec2.js'],
    directConnect: true,
}