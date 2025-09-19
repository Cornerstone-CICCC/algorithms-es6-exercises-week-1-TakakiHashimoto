/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, 
create a series of logical expressions that prints the size of a t-shirt based on the measurements of 
shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. 
For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/

// function Size(width, length, sleeve) {
//     this.width = width;
//     this.length = length;
//     this.sleeve = sleeve;
//     this.compare = function(){
//         
//     }
// }

// let size = new Size(18, 29, 5.55);



let shirtWidth = 18;
let shirtLength = 29;
let shirtSleeve = 8.13;

let size = "";
let sLength = ""
let sleeve = ""

let sizeArray = []

if (shirtWidth <= 18) {
    size = "S";
    sizeArray.push(size);
} else if (shirtWidth >= 19 && shirtWidth <= 20) {
    size = "M";
    sizeArray.push(size);
} else if (shirtWidth >= 21 && shirtWidth <= 22) {
    size = "L";
    sizeArray.push(size)
} else if (shirtWidth >= 23 && shirtWidth <= 24) {
    size = "XL";
    sizeArray.push(size)
} else if (shirtWidth >= 25 && shirtWidth <= 28) {
    size = "2XL";
    sizeArray.push(size)
} else if (shirtWidth > 28) {
    size = "3XL";
    sizeArray.push(size)
}

if (shirtLength === 28) {
    sLength = "S";
    sizeArray.push(sLength);
} else if (shirtLength ===29) {
    sLength = "M";
    sizeArray.push(sLength);
} else if (shirtLength ===30) {
    sLength = "L";
    sizeArray.push(sLength);
} else if (shirtLength ===31) {
    sLength = "XL";
    sizeArray.push(sLength);
} else if (shirtLength >= 32 && shirtLength <=33) {
    sLength = "2XL";
    sizeArray.push(sLength);
} else if (shirtLength >= 34) {
    sLength = "3XL";
    sizeArray.push(sLength);
}

// Size	Width	Length	Sleeve
// S	    18"	    28"	    8.13"
// M	    20"	    29"	    8.38"
// L	    22"	    30"	    8.63"
// XL	    24"	    31"	    8.88"
// 2XL	    26"	    33"	    9.63"
// 3XL	    28"	    34"	    10.13"

if (shirtSleeve <= 8.13){
    sleeve = "S";
    sizeArray.push(sleeve);
} else if (shirtSleeve > 8.13 && shirtSleeve <= 8.38){
    sleeve = "M";
    sizeArray.push(sleeve);
} else if (shirtSleeve > 8.38 && shirtSleeve <= 8.63){
    sleeve = "L";
    sizeArray.push(sleeve);
} else if (shirtSleeve > 8.63 && shirtSleeve <= 8.88){
    sleeve = "XL";
    sizeArray.push(sleeve);
} else if (shirtSleeve > 8.88 && shirtSleeve <= 9.63){
    sleeve = "2XL";
    sizeArray.push(sleeve);
} else if (shirtSleeve > 9.63 && shirtSleeve <= 10.13){
    sleeve = "3XL";
    sizeArray.push(sleeve);
};

let isSame = true;
for (let i = 0; i < sizeArray.length; i++){
    for (let j = i+1; j < sizeArray.length; j++){
        if (sizeArray[i] !== sizeArray[j]){
            isSame = false;
            break;
        }
    }
}

if (isSame){
    console.log(sizeArray[0]);
} else {
    console.log("NA");
}

