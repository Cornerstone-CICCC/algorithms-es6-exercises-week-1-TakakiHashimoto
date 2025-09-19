/*
Write an anonymous function expression that stores a function in a variable called "laugh" 
and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

const numOfLaugh = function(num){
    let ha = "";
    for (let i = 0; i < num; i++){
        ha += "ha";
    }
    return ha;
}

let laugh = numOfLaugh(5);
console.log(laugh);