
var result = 89;

makeGrade(result)

function makeGrade(result){
    if(result < -1)
        console.log("Failed");
    else if(result >= 0 && result < 40)
        console.log("Tumi C grade paico");
    else if(result >= 40 && result < 60)
        console.log("Tumi B grade paico")
    else if(result >= 60 && result < 70)
        console.log("Tumi A- grade paico");
    else if(result >= 70 && result < 80)
        console.log("Tumi A grade paico")
    else if(result >= 80 && result <= 100)
        console.log("Tumi A+ grade paico")
    else
        console.log("Invalid")
}