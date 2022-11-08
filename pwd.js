const { cwd } = require('node:process');

module.exports = function () {
    console.log(`Current directory: ${cwd()}`);
    process.stdout.write('\nprompt > ');
}


