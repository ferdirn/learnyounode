var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', processFile)

function processFile(error, data) {
    var l = data.split('\n').length
    logResult(l - 1)
}

function logResult(data) {
    console.log(data)
}