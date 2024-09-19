// if Statement

let age = 17;
if(age>=18){
    console.log("You can Vote")
}
if(age<18){
    console.log("You can Not Vote")
}


let color;
let mode = "dark";
if(mode === "dark"){
    color = "balck";
}
if(mode === "light"){
    color = "white";
}
console.log(color);



// if-else statement

let age = 25;
if(age>=18){
    console.log("You can vote")
}
else{
    console.log("You can not vote")
}



let num = 11;
if(num%2===0){
    console.log("Even")
}else{
    console.log("Odd")
}



// else-if statement

let mode = "dark"
let color;
if(mode === "dark"){
    color = "black";
}else if (mode === "blue"){
    color = "blue";
}else if (mode === "pink"){
    color = "pink";
}else {
    color = "white";
}
console.log(color);





let num = 22;
if(num%5===0){
    console.log(num, "is multiple of 5");
}else{
    console.log(num, "is not a multiple of 5");
}


let score = 99;
let grade ;
if(score >=90 && score <=100){
    grade = 'A';
} else if(score >=70 && score <=89){
    grade = 'B';
}else if(score >=60 && score <=69){
    grade = 'C';
}else if(score >=50 && score <=59){
    grade = 'D';
}else if(score >=0 && score <=49){
    grade = 'F'
}
console.log(grade)
