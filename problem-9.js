const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const monthlySavings = (payments = [], livingCost = 0) => {
    let totalSavings = 0.0;
    payments.forEach((payment) => {
        if(payment >= 3000)
            totalSavings += payment - payment * 0.20;
        else
            totalSavings += payment;
    });
    totalSavings -= livingCost;
    
    return (totalSavings < 0)? "earn more" : totalSavings;
};

rl.question('Enter an array and a number (e.g., [1,2,3], 5): ', (input) => {
  const [arrayString, numberString] = input.split(', ');

  const payments = JSON.parse(arrayString.trim());
  const livingCost = parseFloat(numberString.trim());

  if(!Array.isArray(payments) || (typeof livingCost !== 'number'))
    console.log('invalid input');
  else
    console.log(monthlySavings(payments, livingCost));

  rl.close();
});
