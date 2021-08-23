let n, m;
let cnArr = [];
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', (line) => {
    if (n == undefined) {
        n = parseInt(line.split(' ')[0]);
        m = parseInt(line.split(' ')[1]);
    } else {
        if (cnArr.length < (n - 1)) {
            cnArr.push(parseInt(line));
        } else {
            cnArr.push(parseInt(line));

            console.log(`n=${n}, m=${m}`);
            console.log(cnArr);
            rl.close();
            return;
        }
    }
}).on('close', () => process.exit(0));