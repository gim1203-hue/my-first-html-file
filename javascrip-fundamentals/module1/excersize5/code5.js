const prompt = require('prompt-sync')();

// Ask the user to enter a name.
let name = prompt('Enter a name: ');

// If the name is empty, print: empty
if (name === '') {
    console.log('empty');
}
// If the name is 1-8 characters long, print "short name"
else if (name.length <= 8) {
    console.log('short name');
}
// Otherwise, print "long name"
else {
    console.log('long name');
}

let firstname = prompt('Enter your first name: ');
if (firstname === '') {
    console.log('empty');
} else if (firstname.length <= 8) {
    console.log('short name');
} else {
    console.log('long name');
}