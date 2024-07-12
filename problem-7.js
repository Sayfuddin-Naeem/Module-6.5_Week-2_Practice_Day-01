var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let unique = []

numbers.forEach((number) => {
    if(unique.find(num => num === number) === undefined)
        unique.push(number);
});

console.log(...unique);