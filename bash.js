const { cwd } = require('node:process');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl')

// Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data, fileName) => {
    const cmd = data.toString().trim(); //remove the newline
    const newCmd = cmd
    if (newCmd.includes('cat')) {
        const splitCmd = newCmd.split();
        
    } 
    
    else if (newCmd === 'pwd') {
        pwd();
    }
    else if (newCmd === 'ls') {
        ls();
    }
    else if (newCmd.includes('cat')) {
        cat(fileName);
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ')
    }

});