const dividedBy_3 = []
const dividedBy_5 = []

for(let i = 1; i<51; ++i){
    if(i % 3 === 0)
        dividedBy_3.push(i);
    if(i % 5 === 0)
        dividedBy_5.push(i);
}

console.log(`Divided by 3: ${dividedBy_3.join(', ')}`);
console.log(`Divided by 5: ${dividedBy_5.join(', ')}`);