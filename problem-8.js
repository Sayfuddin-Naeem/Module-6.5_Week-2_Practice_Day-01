var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let bigNumber = numbers[0];

numbers.forEach((number) => {
    if(number > bigNumber)
        bigNumber = number;
});

console.log(bigNumber);