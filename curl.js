
const request = require('request')

const _url = 'https://www.google.com';

request(_url, {json: true }, (err, res, body) => {
    if (err) { throw err; }
    console.log(body)
})