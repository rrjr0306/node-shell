const { readFile } = require('node:fs') 

module.exports = function(fileName) {
    console.log(fileName);
    readFile(fileName, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data)
    })
}