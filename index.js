const {
    spawn
} = require('child_process');

var executionName = process.argv[3];

const child = spawn('bash', [`${executionName}.sh`]);

child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
                `code ${code} and signal ${signal}`);
})

child.stdout.pipe(process.stdout)
  
child.stderr.pipe(process.stderr)