var http = require('http')
var bl = require('bl')
var result = []
var count = 0;

function httpGet(index) {
    url = process.argv[index + 2]
    http.get(url, function(response) {
        response.pipe(bl(function(error, data) {
            if (error)
                return console.error(error)

            result[index] = data.toString()
            count++

            if (count == 3) {
                result.forEach(function(data) {
                    console.log(data)
                })
            }
        }))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}