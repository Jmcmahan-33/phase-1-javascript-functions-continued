
function saturdayFun(saturdayActivity = "roller-skate") {
    return `This Saturday, I want to ${saturdayActivity}!`
}

function mondayWork (mondayActivity = 'go to the office') {
    return `This Monday, I will ${mondayActivity}.`
}

// first try
// function wrapAdjective(flair = "*") {
//    const adj = "special";
//    return `You are ${flair} ${adj} ${flair}!`
// }

function wrapAdjective(flair = "*") {
   return function (adjWord = "special") {
    return `You are ${flair}${adjWord}${flair}!`
   }
}

wrapAdjective("%")("a dedicated programmer")