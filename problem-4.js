const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isLeapYear = (year)=>{

    if(year % 400 === 0)
        console.log(`${year} is leap year`);
    else if(year % 100 === 0)
        console.log(`${year} is not leap year`);
    else if(year % 4 === 0)
        console.log(`${year} is leap year`);
    else
        console.log(`${year} is not leap year`);
}

rl.question('Enter year: ', (year) => {
    year = parseInt(year, 10);
    isLeapYear(year);
  rl.close();
});
