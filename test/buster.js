var config = module.exports;

config["My tests"] = {
    env: "node",
    rootPath: "../",
    sources: [
        "lib/**/*.js"   // Glob patterns supported
    ],
    tests: [
        "test/*-test.js"
    ]
}
