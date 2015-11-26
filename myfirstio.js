var fs = require('fs')
var file = process.argv[2]
var buf = fs.readFileSync(file)
var str = buf.toString()
var strArray = str.split('\n')
console.log(strArray.length - 1)
