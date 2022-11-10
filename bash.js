const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl')

// Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove the newline
    const newCmd = cmd
    const splitCmd = newCmd.split(' ');
    // if (newCmd.startWith('cat')) {
    //     const splitCmd = newCmd.split();
        
    // } 
    
    if (splitCmd[0] === 'pwd') {
        pwd();
    }
    else if (splitCmd[0] === 'ls') {
        ls();
    }
    else if (splitCmd[0] ==='cat') {
        cat(splitCmd[1]);
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ')
    }

});