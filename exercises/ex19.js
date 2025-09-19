/*
Call the emotions() function so that it prints the output you see below, 
but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function emotions(emotion,func){
    let laughNum = func(2);
    console.log(`I am ${emotion}, ${laughNum}!`);
}


emotions("happy", function(num){
    let ha = "";
    for (let i = 0; i < num; i++){
        ha += "ha"
    }
    return ha;
});
