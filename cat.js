const { readFile } = require('node:fs') 

module.exports = function(fileName) {
    readFile(fileName, (err, data) => {
        if (err) throw err;
        console.log(data)
    })
}