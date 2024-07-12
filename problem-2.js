const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const oddEven = (number)=>{
    if(number % 2 == 0)
        console.log(`${number} is Even Number`);
    else
        console.log(`${number} is Odd Number`)
}

rl.question('Enter your number: ', (number) => {
  number = parseInt(number, 10);
  oddEven(number);
  rl.close();
});
